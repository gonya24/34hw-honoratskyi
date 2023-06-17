class Student {
    #attendance = [];
    #counter = 0;
    constructor(firstName, lastName, dateOfBirth, listOfGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.listOfGrade = listOfGrade;
        this.#attendance.length = 25;
        this.age = new Date().getFullYear() - this.dateOfBirth;
        this.averageGrade = (this.listOfGrade.reduce((sum, current) => sum + current, 0)) / this.listOfGrade.length.toFixed(1);
    }


    getAge() {
        return console.log(`Вік студента(кі) ${this.firstName} ${this.lastName} : ${this.age} р.`)
    }
    getAverageGrade() {
        return console.log(`Середня оцінка студента(кі) ${this.firstName} ${this.lastName}: ${this.averageGrade}`)
    }
    present() {
        if (this.#counter >= 25) {
            return console.log('Цей місяць вже заповнений')
        } else {
            this.#attendance[this.#counter] = true;
            this.#counter++
           return console.log('Відвідування зараховано!')
        }
    }
    absent() {
        if (this.#counter >= 25) {
            return console.log('Цей місяць вже заповнений')
        } else {
            this.#attendance[this.#counter] = false;
            this.#counter++
            return console.log('Відсутність зараховано!')
        }
    }
    summary() {
        let totalAttendance = this.#attendance.filter(el => typeof el === 'boolean').length
        let attendanceIsTrue = this.#attendance.filter(el => el === true).length
        let averageAttendance = (attendanceIsTrue / totalAttendance).toFixed(2)
        if (this.averageGrade > 90 && averageAttendance > 0.9) {
            console.log('Молодець!')
        } else if (this.averageGrade > 90 || averageAttendance > 0.9) {
            console.log('Добре, але можна краще!')
        } else { console.log('Редиска!') }
    }


}
const st1 = new Student('illia', 'Honoratskyi', 2003, [60, 70, 95, 90, 82])
const st2 = new Student('Vasilyi', 'Loma', 1995, [85, 95, 92, 98, 91])
const st3 = new Student('Viktoriia', 'Perebyinis', 2001, [90, 98, 85, 95, 83])
{
    st1.getAge();
    st1.getAverageGrade();
    for(let i = 0;i<15; i++) {
        st1.present()
    }
    for(let i = 0;i<10; i++) {
        st1.absent()
    }
    st1.summary()
    console.log('************************************')
}
{
    st2.getAge();
    st2.getAverageGrade();
    for(let i = 0;i<15; i++) {
        st2.present()
    }
    for(let i = 0;i<10; i++) {
        st2.absent()
    }
    st2.summary()
    console.log('************************************')
}
{
    st3.getAge();
    st3.getAverageGrade();
    for(let i = 0;i<25; i++) {
        st3.present()
    }
    st3.summary()
    console.log('************************************')
}