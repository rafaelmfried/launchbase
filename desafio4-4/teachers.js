const fs = require('fs')
const data = require('./data.json')
const { age, graduation, classTypeConversion ,date } = require('./public/javascript/utils')
const Intl = require('intl')

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
        birth: date(foundTeacher.birth),
        skills: foundTeacher.teacher_skills,

    }

    return res.render('teachers/edit', { teacher })
}