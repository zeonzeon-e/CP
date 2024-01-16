function solution(sides) {
    var longest = sides.sort((a, b) => b - a)
    var answer = 0;
    if(longest[0] < (longest[1] + longest[2]))
       return 1;
    else
       return 2;
}