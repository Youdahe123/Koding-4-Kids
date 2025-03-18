var myArray = [];
// var i = 0
// while(i < 5){
//     if (i % 2 == 0){
//         myArray.push(i)
//     }
//     i++
// }

for(i=9;i>0;i-=2){
    myArray.push(i)
}

for (i=0;i < myArray.length;i++){
    if(myArray[i] > 5){
        myArray.unshift("bigger")
    }
}
console.log(myArray)