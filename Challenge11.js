var fs = require('fs')
var data = fs.readFileSync('tebakan.json', 'utf8')
var qna = JSON.parse(data)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan:'
});

var i = 0
console.log('Selamat datang dipermainan tebak kata , silahkan jawab yang benar ya!\n')
console.log(qna[i].question)
rl.prompt();
rl.on('line', (line) => {
    if (line.trim().toLowerCase() == qna[i].answer) {
        i++
        console.log('Selamat Anda Benar!\n');
        if (i != qna.length) {
            console.log(qna[i].question)
            rl.prompt()
        } else {
            rl.close()
        }
    } else {
        console.log('wkwkwkwk Anda kurang beruntung!\n')
        console.log(qna[i].question)
        rl.prompt()
    }

}).on('close', () => {
    console.log('Hore Anda Menang!');
    process.exit(0);
});

