// Schritt 1: Definition des Studenten-Typs und Erstellung einer Funktion zur Ausgabe
// Schritt 2: Erlaubt auch Strings und number als Benotung
type grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: grade[]
}

let antonMeier:Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1,4,3,1,"A",undefined,1,2]
}
let bertaMueller:Student = {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades: ["A",undefined,1]
}
let caesarSchmidt:Student = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grades: ["A",1,undefined, 3,2,4,5]
}
const allStudents:Student[] = [antonMeier, bertaMueller, caesarSchmidt];

function printStudent (theStudent : Student) {
    console.log(theStudent.firstName + ' ' + theStudent.lastName + " (" + theStudent.age + ")");
    console.log("=".repeat(30));

    // Schritt 3: Erlaubt auch undefined als Wert (in der Ausgabe als *)
    const grades = theStudent.grades.map((grade) => grade === undefined? "*" : grade);

    console.log("Noten: " + grades + "\n\n");
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