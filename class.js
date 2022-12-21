class rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
}
let rect1 = new rectangle(12, 10);
let rect2 = new rectangle(265, 189);
let rect3 = new rectangle(87.23,93.45)

// console.log(rect1.breadth)
// console.log(rect1.length)
// console.log(rect2.breadth)
// console.log(rect2.length)

function Area(rectangle){
    let A = rectangle.length * rectangle.breadth
    console.log(A)
}
Area(rect1)
Area(rect2)
Area(rect3)