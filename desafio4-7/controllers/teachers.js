const fs = require('fs')
const data = require('../data.json')
const { age, graduation, classTypeConversion ,date } = require('../public/javascript/utils')
const Intl = require('intl')

exports.create = function(req, res) {
    return res.render('teachers/create')
}

exports.index = function(req, res) {
    const teachers = data.teachers.map((teacher) => {
        teacher.skills = teacher.teacher_skills.split(',')
        return teacher
    })

    return res.render('teachers/index', { teachers })
}

exports.show = function(req, res) {
    const { id } = req.params
    
    const foundTeacher = data.teachers.find( (teacher) => {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not Found!")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        education_level: graduation(foundTeacher.education_level),
        class_type: classTypeConversion(foundTeacher.class_type),
        skills: foundTeacher.teacher_skills.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
    }

    return res.render("teachers/show", { teacher })
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)
    
    for(key of keys) {
        if(req.body[key] == "")
        return res.send('Please, fill all fields!')
    }
    
    let { avatar_url, name, birth, education_level, class_type, teacher_skills } = req.body
    
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)


    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education_level,
        class_type,
        teacher_skills,
        created_at,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")
    
        return res.redirect("/teachers")
    })
}

exports.edit = function(req, res) {
    const { id } = req.params
    
    const foundTeacher = data.teachers.find( (teacher) => {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not Found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso,
        skills: foundTeacher.teacher_skills,

    }

    return res.render('teachers/edit', { teacher })
}

exports.update = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find( (teacher, foundIndex) => {
        if( id == teacher.id){
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) return res.send("Teacher not Found!")

    const teacher = {
        ...foundTeacher,
        ...req.body,
        id: Number(id),
        birth: Date.parse(req.body.birth),
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("File write error!")

        return res.redirect(`/teachers/${id}`)
    })
}

exports.delete = function(req, res) {
   const { id } = req.body
   
   const filteredTeachers = data.teachers.filter((teacher) => {
       return teacher.id != id
   })

   const newArrayTeachers = filteredTeachers.map((teacher) => {
       if(teacher.id > id)  
            teacher.id = teacher.id - 1

       return teacher
   })

   data.teachers = newArrayTeachers

   fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
       if(err) return res.send("File write error!")
       
       return res.redirect('/teachers')
    })
}
