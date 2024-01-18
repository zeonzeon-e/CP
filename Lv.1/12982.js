//https://school.programmers.co.kr/learn/courses/30/lessons/12982
//예산

function solution(d, budget) {
    var answer = 0;
    var total = 0;
    var arr = new Array();
    d = Object(d)
    budget = Number(budget)
    d = Object.values(d)
    for(let i = 0; i <d.length; i++){
        arr[i] = Number(d[i])
    }
    arr = arr.filter(Boolean)
    console.log(arr)
    arr.sort((a, b) => a - b).forEach(price => {
        if((total+price) <= budget) {
            total += price; 
            answer++;
        }
    });
    console.log(answer)
    return answer;
}
