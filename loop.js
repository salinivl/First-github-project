for (let i=0;i<10;i++){
    console.log(i+1)
}

var array=[1,2,3,4];
for (let i=0; i<4; i++){
    console.log(array[i]);
}

//for ...of

for (const i of array) {
    console.log(i);
}
//for..in

var obj={name:"Ann", age:12}
for (const i in obj) {
    
        console.log(obj[i]);
        
    }

//while loop
var i=0;
while (i<10) {
 console.log(i+1)
 i++;   
}
var i=0;
while(i<4){
    console.log(array[i])
    i++
}
//do..while
var i=0;
do {
    console.log(i+1);
    i++
} while (i<10);

var i=0;
do {
    console.log(array[i])
    i++  
} while (i<4);