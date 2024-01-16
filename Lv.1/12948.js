function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(-4)
    console.log(answer)
    var front = phone_number.slice(0, phone_number.length-4)
    console.log(front)
    answer = '*'.repeat(front.length) + answer
    return answer;
}