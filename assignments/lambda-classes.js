// CODE here for your Lambda Classes

class Person {
    constructor(perAttributes) {
        this.name = perAttributes.name;
        this.age = perAttributes.age;
        this.location = perAttributes.location;
        this.gender = perAttributes.gender;
    }

    speak() {
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
};

class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes);

        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today, we are learning about ${subject}.`
    };

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}.`
    };
};

class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);

        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
    }

    listsSubjects() {
        return `${this.favSubjects}`;
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };

    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}.`;
    };
}

class ProjMgr extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);

        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
        this.standUp = pmAttributes.standUp;
    }

    debugsCode(subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const larry = new Person({
    name: "Larry",
    age: 20,
    location: "Maryland",
    gender: 'male' 
});

const jerry = new Person({
    name: "Jerry",
    age: 50,
    location: "Texas",
    gender: 'male'  
});

console.log(larry.speak());

const laura = new Instructor({
    name: "Laura",
    age: 29,
    location: "Montana",
    gender: 'female', 
    specialty: "CSS",
    favLanguage: ["jquery", "Node"]

});

const jack = new Instructor({
    name: "Jack",
    age: 50,
    location: "Canada",
    gender: 'male',  
    specialty: "bootstrap",
    favLanguage: ["JS", "HTML"]
});

console.log(laura.demo("the DOM"));
console.log(jack.grade(jack.name, "JS IV"))


const lane = new Student({
    name: "Lane",
    age: 88,
    location: "Missouri",
    gender: 'male', 
    specialty: "LESS",
    favLanguage: ["JS", " Python", " Golang"],
    previousBackground: "construction",
    className: "CS1",
    favSubjects: ["Python", " Golang"]
});

const joy = new Student({
    name: "Joy",
    age: 90,
    location: "Toronto",
    gender: 'female',  
    specialty: "redux",
    favLanguage: ["Ruby", " Haskel", " Go"],
    previousBackground: "nail art",
    className: "CS15",
    favSubjects: ["HTML", "SASS"]
});

console.log(lane.listsSubjects()); 
console.log(lane.PRAssignment("React I")); 
console.log(lane.sprintChallenge("Ruby")); 

console.log(joy.sprintChallenge("Redux II"));