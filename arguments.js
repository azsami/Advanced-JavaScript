function add (num1, num2){
    console.log([...arguments]);
    return num1 + num2 ;
}
const result = add(4, 2, 5 , 8);
console.log(result);