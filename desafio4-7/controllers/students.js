const fs = require('fs')
const data = require('../data.json')
const { date, grade } = require('../public/javascript/utils')
const Intl = require('intl')

exports.create = function(req, res) {
    return res.render('students/create')
}

exports.index = function(req, res) {
    const students = data.students.map((student) => {
        student.school_year = grade(student.school_year)
        return student
    })

    return res.render('students/index', { students })
}

exports.show = function(req, res) {
    const { id } = req.params
    
    const foundStudent = data.students.find( (student) => {
        return student.id == id
    })

    if (!foundStudent) return res.send("Student not Found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        school_year: grade(foundStudent.school_year),
    }

    return res.render("students/show", { student })
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)
    
    for(key of keys) {
        if(req.body[key] == "")
        return res.send('Please, fill all fields!')
    }
    
    let { avatar_url, name, birth, email, school_year, workload } = req.body
    
    birth = Date.parse(birth)
    const id = Number(data.students.length + 1)


    data.students.push({
        id,
        avatar_url,
        name,
        birth,
        email,
        school_year,
        workload,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")
    
        return res.redirect("/students")
    })
}

exports.edit = function(req, res) {
    const { id } = req.params
    
    const foundStudent = data.students.find( (student) => {
        return student.id == id
    })

    if (!foundStudent) return res.send("Student not Found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso,
    }

    return res.render('students/edit', { student })
}

exports.update = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find( (student, foundIndex) => {
        if( id == student.id){
            index = foundIndex
            return true
        }
    })

    if (!foundStudent) return res.send("Student not Found!")

    const student = {
        ...foundStudent,
        ...req.body,
        id: Number(id),
        birth: Date.parse(req.body.birth),
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("File write error!")

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = function(req, res) {
   const { id } = req.body
   
   const filteredStudents = data.students.filter((student) => {
       return student.id != id
   })

   const newArrayStudents = filteredStudents.map((student) => {
       if(student.id > id)  
            student.id = student.id - 1

       return student
   })

   data.students = newArrayStudents

   fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
       if(err) return res.send("File write error!")
       
       return res.redirect('/students')
    })
}
