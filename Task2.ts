function Add(num1, num2){
    return num1+num2;
}
function Captalize(str){
    if(typeof str !== 'string'){
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(Add(2,2));
console.log(Add(3,6));
console.log(Captalize('hello'));
console.log(Captalize('world'));