"use strict";
// Напишите функцию mapObject, которая
// в чем-то очень похожа на функцию map для массивов.
// /**
//  * Трансформирует объект типа NamesAndEvaluations в объект типа NamesAndCredits.
//  * 
//  * @param namesAndEvaluations Имя и оценка студента в виде объекта типа NamesAndEvaluations.
//  * @returns Имя и зачёт студента в виде объекта типа NamesAndCredits.
//  */
// function transformer(namesAndEvaluations: NamesAndEvaluations): NamesAndCredits {
//     let namesAndCredits: NamesAndCredits = {}
//     for (let name in namesAndEvaluations) {
//         namesAndCredits[name] = namesAndEvaluations[name] > 2 ? true : false;
//     }
//     return namesAndCredits;
// }
function transformer(name, evaluation) {
    let credit = {};
    credit[name] = evaluation > 2 ? true : false;
    return credit;
}
function mapObject(namesAndEvaluations, transformer) {
    let namesAndCredits = {};
    for (let name in namesAndEvaluations) {
        let evaluation = namesAndEvaluations[name];
        let nameAndCredit = transformer(name, evaluation);
        namesAndCredits = Object.assign(Object.assign({}, namesAndCredits), nameAndCredit);
    }
    return namesAndCredits;
}
// /**
//  * Перебирает поля объекта типа { "roma" : 5, "vasya": 2 }. Собирает из каждого поля объект и применяет к нему пераданную функцию transformer.
//  * 
//  * @param namesAndEvaluations Имена и оценки студентов в виде объекта типа { "roma" : 5, "vasya": 2 }.
//  * @param transformer функция для трансформации 
//  * @returns 
//  */
// function mapObject(namesAndEvaluations: NamesAndEvaluations, transformer: Trans): NamesAndCredits {
//     let namesAndCredits: NamesAndCredits = {};
//     for (let name in namesAndEvaluations) {
//         let nameAndEvaluation = { [name]: namesAndEvaluations[name] }
//         let nameAndCredit = transformer(nameAndEvaluation);
//         namesAndCredits = { ...namesAndCredits, ...nameAndCredit };
//     }
//     return namesAndCredits;
// }
let studentsEvaluations = { "roma": 5, "vasya": 2, "petya": 3 };
console.log(mapObject(studentsEvaluations, transformer));
