const readline= require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = []
rl.on("line", (line) => {
    input = line.split(' ');
    rl.close();
})

rl.on('close', ()=> {

    solution(input[0],input[1])
    process.exit();
})

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
        answer += Number(i);
       else
        answer -= Number(i);
    }
    console.log(answer);
    return answer;
}