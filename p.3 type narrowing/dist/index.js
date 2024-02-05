"use strict";
// Есть функция. Она принимает некий объект А, у которого есть поля со значениями
// - или undefined 
// - или объекта с одним полем cvalue, который 
//      либо undefined 
//      либо по типу равный 
//           либо строке, 
//           либо числу, 
//           либо ссылке на объект по своей структуре/описанию подобный описываемому объекту А.
// ...Функция должна вернуть сумму "значений" поля cvalue всех полей объекта, притом,
// - если у очередного элемента поле сvalue - это число, 
//   то просто добавляем это число.
// - если у очередного элемента поле сvalue - это строка, 
//   то просто конвертим строку в число и добавляем.
// - если у очередного элемента поле cvalue - это объект подобный корневому, 
//   то добавляем сумму его полей (привет рекурсия)
// - если мы натыкаемся на undefined, или же если cvalue был строкой которая по факту не являлась адекватным числом - 
//   то тогда значением будет 2022.
// 2) если не получилось, смотрите спойлер: https://pastebin.com/2nEJvk04
// 3) пользуясь силой тайпскрипта и описанной сигнатуры, 
// найдите как можно больше ошибок, которых не нашли раньше. 
// По мере фикса кода, обнаруживайте еще ошибки на шару в процессе кодинга, 
// без запуска программы.
// результат скиньте @roman
// ... а вот и код багонутой функции:
function summ(a) {
    let x = Object.keys(a).map((k) => {
        let elem = a[k];
        if (typeof elem === undefined)
            return 2022;
        let cval = elem === null || elem === void 0 ? void 0 : elem.cvalue;
        if (cval) {
            if (typeof cval === 'string')
                return +cval || 2022;
            if (typeof cval !== 'number')
                return summ(cval);
            return cval;
        }
        else {
            return 2022;
        }
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(summ({ hello: { cvalue: 1 }, world: { cvalue: { yay: { cvalue: "2" } } } }));
// Удачи найти все баги. 
// Тут может быть проще все с нуля написать, но задача не об этом. 
// А про то, как находить ошибки не напрягаясь.
// И про type narrowing:
// - про guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
// - про truthiness narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
// - про control flow analysis: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis
// Дайте знать @roman про результаты.
