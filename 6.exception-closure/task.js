function parseCount(value) {
    let parsed = Number.parseInt(value);
    if (Number.isNaN(parsed)) {
        const error = new Error("Невалидное значение");
        throw error;
    }
    return parsed;
}

function validateCount(value) {
    try {
        let parsed = parseCount(value);
        return parsed;
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
        this.a = a;
        this.b = b;
        this.c = c;      
    }

    getPerimeter() {
        let perimetr = this.a + this.b + this.c;
        return perimetr;
    }

    getArea() {
        let halfPerimetr = this.getPerimeter() / 2;
        let square = Math.round(Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)) * 1000) / 1000;
        return square;
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        let obj = {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
        return obj;
    }
}