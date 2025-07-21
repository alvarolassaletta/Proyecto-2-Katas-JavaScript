
/**6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
los alumnos usando la función .reduce(). */

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalGrade = exams.reduce( (accumulator , student)=> accumulator  + student.score, 0)

console.log(totalGrade);

/*6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
alumnos que esten aprobados usando la función .reduce(). */

const totalGradePassed=  exams.reduce((accumulator,student)=>{
    if(student.score>=5){
       return  accumulator+student.score
    }
    return accumulator;


}, 0)
console.log(totalGradePassed);


/**6.3  Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */

const average = exams.reduce((accumulator,student)=>{
    return  accumulator + student.score;
},0);
console.log(`La media de las notas es ${average/exams.length}`);
//La media de las notas es 5.2


