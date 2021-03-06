function solveEquation(a, b, c) {
    let result;
    let D = b ** 2 - 4 * a * c;

    if (!a) {
        result = 'Число "а" не может быть равно 0. Измените число "а" и попробуйте заново';
        return result;
    }

    if (D > 0) {
        x1 = ((-b + D ** 0.5) / (2 * a)).toFixed(5);
        x2 = ((-b - D ** 0.5) / (2 * a)).toFixed(5);
        result = `Уравнение: ${a}x2+${b}x+${c}=0
Дискриминант квадратного уравнения D=${D}
Так как дискриминант больше нуля то, квадратное уравнение имеет два корня:
x1=${x1}
x2=${x2}`;
    } else if (D < 0) {
        result = `Уравнение: ${a}x2+${b}x+${c}=0
Дискриминант квадратного уравнения D=${D}
Так как дискриминант меньше нуля то, уравнение не имеет корней`;
    } else {
        x = -b / (2 * a);
        result = `Уравнение: ${a}x2+${b}x+${c}=0
Дискриминант квадратного уравнения D=${D}
Так как дискриминант равень нулю то, квадратное уравнение имеет один корень: 
x=${x}`;
    }
    return result;
}

let a = Number(prompt('Введите значение а'));
let b = Number(prompt('Введите значение b'));
let c = Number(prompt('Введите значение c'));
console.log(solveEquation(a, b, c));