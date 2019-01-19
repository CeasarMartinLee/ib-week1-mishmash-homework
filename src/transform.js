module.exports.groupAdultsByAgeRange = function (group) {
    const teens = []
    const twenties = []
    const thirties = []
    const forties = []
    const oldies = []
    return group
        .filter(person => person.age >= 18)
        .reduce((grouped, person) => {
            if (person.age > 17 && person.age < 21) {
                teens.push(person)
                grouped['20 and younger'] = teens
                return grouped
            } else if (person.age > 20 && person.age < 31) {
                twenties.push(person)
                grouped['21-30'] = twenties
                return grouped
            } else if (person.age > 30 && person.age < 41) {
                thirties.push(person)
                grouped['31-40'] = thirties
                return grouped
            } else if (person.age > 40 && person.age < 51) {
                forties.push(person)
                grouped['41-50'] = forties
                return grouped
            } else {
                oldies.push(person)
                grouped['51 and older'] = oldies
                return grouped
            }

        }, {})
}
