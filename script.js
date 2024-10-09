// task 1

function addParamsToRequest(params) {
    let count = 0;
    return function (data) {
        count++;
        return {...params, ...data, count};
    }
}

const sendData = addParamsToRequest({accessToken: 'qwerty'});

const result = sendData({userName: 'hacker', password: '123'});
const secondResult = sendData({userName: 'second hacker'});

console.log(result);
console.log(secondResult);

// task 2

const obj = {

    getData: function () {

        console.log(`Person name is: ${this.name} and age ${this.age}`);

    }

}

obj.getData.call({name: "Nick", age: 45});

function setContextForObj (name, age) {
    obj.getData.call({name, age});
}

setContextForObj("Cris", 25);

// task 3

const root = {

    name: 'name',

    type: 'folder',

    children: [

        {

            name: 'folder 1',

            type: 'folder',

            children: [

                {

                    name: 'folder 2',

                    type: 'folder',

                    children: [

                        {

                            name: 'file 3',

                            type: 'file',

                            size: 30

                        }

                    ]

                }

            ]

        },

        {

            name: 'file 1',

            type: 'file',

            size: 10

        },

        {

            name: 'file 2',

            type: 'file',

            size: 20

        }

    ]

};
let fileNamesArr = [];

function findAllFiles (obj) {

    if(obj.type === 'file') {
        fileNamesArr.push(obj.name);
    } else {
        obj.children.forEach(item => findAllFiles(item));
    }
}

findAllFiles(root);
console.log(fileNamesArr)

// task 4

// ES6
class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    introduce () {
        console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`)
    }

}

class Student extends Person {
    constructor(name, phone, course) {
        super(name, phone);
        this.course = course;
    }

    study () {
        console.log(`Я навчаюся на ${this.course} курсі`);
    }
}

class Teacher extends Person {
    constructor(name, phone, subject) {
        super(name, phone);
        this.subject = subject;
    }

    teach () {
        console.log(`Я викладаю ${this.subject}`);
    }
}

const student = new Student('Jackson', '+380669966900', 3);
student.introduce();
student.study();

const teacher = new Teacher('Oleg', '+380123123777', 'Biology');
teacher.introduce();
teacher.teach();

console.log('-----------------------------')

// ES5
function PersonES5(name, phone) {
    this.name = name;
    this.phone = phone;
}

PersonES5.prototype.introduce = function() {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
};

function StudentES5(name, phone, course) {
    PersonES5.call(this, name, phone);
    this.course = course;
}

StudentES5.prototype = Object.create(PersonES5.prototype);
StudentES5.prototype.constructor = StudentES5;

StudentES5.prototype.study = function() {
    console.log(`Я навчаюся на ${this.course} курсі`);
};

function TeacherES5(name, phone, subject) {
    PersonES5.call(this, name, phone);
    this.subject = subject;
}

TeacherES5.prototype = Object.create(PersonES5.prototype);
TeacherES5.prototype.constructor = TeacherES5;

TeacherES5.prototype.teach = function() {
    console.log(`Я викладаю ${this.subject}`);
};

const anotherStudent = new StudentES5('Ostap', '+380995554242', 1);
anotherStudent.introduce();
anotherStudent.study();

const anotherTeacher = new TeacherES5('Emely', '+380507771230', 'Math');
anotherTeacher.introduce();
anotherTeacher.teach();

