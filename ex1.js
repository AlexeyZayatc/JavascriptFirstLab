function check(num){
    num = Math.abs(num);
    let k =0;
    let sum = 0;
    while((num)>0){
        sum+=(num%10)*(num%10);
        num=Math.floor(num/10);
        k++;
    }
    if(sum%6==0 && k==3) return true;
return false;
}

let number = prompt("Введите число:");
if (isNaN(parseFloat(number)) || !isFinite(number)){
    alert('Введено неверное первое число!');
}
else{
let seq = '';
while (!isNaN(parseFloat(number)) && isFinite(number)){
    if(number%1===0){
    number = parseInt(number);
    if(check(number)){
        seq+=number+' ';
    }    
    }
    number = prompt("Введите число:");
}
document.write(seq);
}
