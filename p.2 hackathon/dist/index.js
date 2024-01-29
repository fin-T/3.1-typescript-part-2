"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function incriesesCounter() {
    return __awaiter(this, void 0, void 0, function* () {
        let counterPlus = 0;
        let Buttoms;
        (function (Buttoms) {
            Buttoms[Buttoms["Plus"] = 0] = "Plus";
            Buttoms[Buttoms["Minus"] = 1] = "Minus";
        })(Buttoms || (Buttoms = {}));
        let response = yield fetch('http://localhost:3000/click', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count: counterPlus++ }),
        });
        yield response.json();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const plusButton = document.getElementById('Plus');
    const minusButton = document.getElementById('Minus');
    if (plusButton && minusButton) {
        plusButton.addEventListener('click', () => incriesesCounter());
        minusButton.addEventListener('click', () => incriesesCounter());
    }
});
