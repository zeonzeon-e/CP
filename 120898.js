function solution(message) {
    var answer = 0;
    if( message.length >= 1 && message.length <= 50){
        for(let i=0; i < message.length; i++){
            answer += 2;
        }
    }
    return answer;
}