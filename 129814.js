function solution(n) {
    var result;
    var pizza = 0;
    if(n >= 1 && n <= 100){
        if (n%7 === 0){
            pizza = Math.floor(n/7);
        }else{
            pizza = Math.floor(n/7) + 1;
        }
    }
    return pizza;
}