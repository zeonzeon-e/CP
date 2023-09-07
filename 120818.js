function solution(price) {
    if(price >= 10 && price <= 1000000){
        if(price >= 500000){
            price = price - price*0.2
        }else if(price >= 300000){
            price = price - price*0.1
        }else if(price >= 100000){
            price = price - price*0.05
        }
        price = Math.floor(price)
    }
    return price;
}