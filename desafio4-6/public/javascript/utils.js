module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if( month < 0 || month == 0 && today.getDate() < birthDate/getDate())
            age = age - 1

        return age
    },
    graduation: function(educationLevel) {
        if(educationLevel == 'high_school') return ("Ensino Médio Completo")
        if(educationLevel == 'degree') return ("Ensino Superior Completo")
        if(educationLevel == 'masters') return ("Mestrado")
        if(educationLevel == 'phd') return ("Doutorado")
    },
    classTypeConversion: function(classType) {
        if(classType == 'presential') return ("Presencial")
        if(classType == 'distance') return ("À distância")
    },
    date: function (timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return (`${year}-${month}-${day}`)
    }
}