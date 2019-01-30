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
        return `${student.name} receives a perfect score on ${subject}.`
    };
}