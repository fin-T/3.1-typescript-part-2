// Напишите функцию mapObject, которая
// в чем-то очень похожа на функцию map для массивов.

// Эта функция должна принимать объект джаваскрипта
// и функцию transformer, которую нужно применить к каждому из полей того объекта, 
// ...а из результата применения функции transformer к каждому полю входящего объекта
// собрать новый объект и вернуть его.

// Так например можно будет замэппить объект типа 
// { "roma" : 5, "vasya": 2 } оценок студентов
// на функцию вроде (x) => x > 2
// чтобы получить объект 
// { "roma": true, "vasya": false } зачетов студентов

// Понятное дело для описания сигнатуры mapObject надо будет юзать
// 1) дженерики с несколькими параметрами-типами
// 2) такую штуку как Record (globalThis.Record, если быть точным ;) )

/**
 * A function that transforms an object field into a new object of type { "roma": true } student's test.
 * 
 * @param name Student name.
 * @param evaluation Student assessment.
 * @returns New object of type { "roma": true } student's test.
 */
function transformer(name: string, evaluation: number): Record<string, boolean> {
    let credit: Record<string, boolean> = {};
    credit[name] = evaluation > 2 ? true : false;
    return credit;
}

/**
 * Creates a new object with the result of calling the specified function for each field of the object.
 * 
 * @param namesAndEvaluations Object of type { "roma" : 5, "vasya": 2 } student ratings.
 * @param transformer A function that will be applied to each field of the object.
 * @returns Object of type { "roma": true, "vasya": false } student credits.
 */
function mapObject(namesAndEvaluations: Record<string, number>,
    transformer: (name: string, evaluation: number) => Record<string, boolean>): Record<string, boolean> {
    let namesAndCredits: Record<string, boolean> = {};
    for (let name in namesAndEvaluations) {
        let evaluation = namesAndEvaluations[name];
        let nameAndCredit = transformer(name, evaluation);
        namesAndCredits = { ...namesAndCredits, ...nameAndCredit };
    }
    return namesAndCredits;
}

let studentsEvaluations = { "roma": 5, "vasya": 2, "petya": 3 };

console.log(mapObject(studentsEvaluations, transformer));
