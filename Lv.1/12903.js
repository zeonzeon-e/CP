//https://school.programmers.co.kr/learn/courses/30/lessons/12903
//가운데 글자 가져오기

function solution(s){
    var answer = '';
    if(s.length % 2 === 0)
        answer = s[s.length/2 - 1] + s[s.length/2];
    if(s.length % 2 !== 0)
        answer = s[parseInt(s.length/2)]
    console.log(answer);
    return answer;
}