//나머지가 1이 되는 수 찾기

function solution(n) {
    var x = 0;
    while(n%x !== 1){
        x++;
    }
    return x;
}