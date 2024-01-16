function solution(absolutes, signs) {
    var answer = 0;
    absolutes = absolutes.map((value, index) => {
        if(signs[index] === false)
            value = (-1) * value
        return value
    }
    )
    answer = absolutes.reduce((a, b)=> a + b);
    return answer
}