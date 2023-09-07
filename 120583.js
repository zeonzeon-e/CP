function solution(array, n) {
    var count = 0;
    if(array.length >= 1 && array.length <= 100){
        for(let i=0; i < array.length; i++){
            if(array[i] == n){
                count += 1;
            }
        }
    }
    return count;
}