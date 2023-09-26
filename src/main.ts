// Schritt 1: Definition des Studenten-Typs und Erstellung einer Funktion zur Ausgabe
// Schritt 2: Erlaubt auch Strings und number als Benotung
type grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    subjects: subject[]
}
type subject = {
    subjectName: string,
    grades: grade[]
}

let antonMeier:Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    subjects: [{
        subjectName: "Sport",
        grades: ["A", 1, undefined]
    },{
        subjectName: "Kunst",
        grades: [3,2,4,5]
    },{
        subjectName: "Mathe",
        grades: [1,2,"A"]
    }]
}
let bertaMueller:Student = {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    subjects: [{
        subjectName: "Sport",
        grades: [1,2,1,1]
    },{
        subjectName: "Kunst",
        grades: [3,"C",undefined, undefined]
    },{
        subjectName: "Mathe",
        grades: [2,"A","B",undefined,2]
    }]
}
let caesarSchmidt:Student = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    subjects: [{
        subjectName: "Sport",
        grades: ["C", 3, 4]
    },{
        subjectName: "Kunst",
        grades: [2,2,4,1]
    },{
        subjectName: "Mathe",
        grades: [4,5,3,"A"]
    }]
}
const allStudents:Student[] = [antonMeier, bertaMueller, caesarSchmidt];

function printStudent (theStudent : Student) {
    let nameString:string = theStudent.firstName + ' ' + theStudent.lastName + " (" + theStudent.age + ")";
    console.log(nameString);
    console.log("=".repeat(nameString.length));
    console.log("Noten:");

    // Schritt 3: Erlaubt auch undefined als Wert (in der Ausgabe als *)
    //const grades = theStudent.grades.map((grade) => grade === undefined? "*" : grade);
    theStudent.subjects.forEach((subject)=> {
        const grades = subject.grades.map((grade) => grade === undefined? "*" : grade);
        console.log(subject.subjectName + ": " + grades);
    });

    //console.log("Noten:" + grades + "\n\n");
    console.log("\n");
}

//printStudent(antonMeier);
//printStudent(bertaMueller);
//printStudent(caesarSchmidt);

//Schritt 4: Gibt eine Liste mit allen Studenten in der Konsole aus
function printAllStudents (studentList: Student[]){
    studentList.forEach((student) => {
        printStudent(student);
    });
}

printAllStudents(allStudents);