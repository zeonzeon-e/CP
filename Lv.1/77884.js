//https://school.programmers.co.kr/learn/courses/30/lessons/77884
//약수의 개수와 덧셈
function solution(left, right){
    var answer = 0;
    for(let i=left; i<=right; i++){
       let count = 0;
       for(let j=1; j<=i;j++){
            if(i%j===0)
                count++;
       }
    console.log(count)
       if(count % 2 === 0)
        answer += i;
       else
        answer -= i;
    }
    console.log(answer);
    return answer;
}

