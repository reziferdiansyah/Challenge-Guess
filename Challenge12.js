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
var n = 1
console.log('Selamat datang dipermainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini `data.json`. Untuk bermain, jawablah dengan jawaban sesuai!\n')
console.log(`Pertanyaan :` + qna[i].question)
rl.prompt();
rl.on('line', (line) => {
    if (line.trim().toLowerCase() == 'skip') {
        qna.push(qna[i])
        i++
        console.log(`\nPertanyaan :` + qna[i].question)
        rl.prompt()

    } else if (line.trim().toLowerCase() == qna[i].answer) {
        i++
        console.log('Anda Beruntung!\n')
        if (i != qna.length) {
            n = 1
            console.log(`Pertanyaan :` + qna[i].question)
            rl.prompt()
        } else {
            rl.close()
        }
    } else {
        console.log('Anda kurang beruntung, Anda telah salah ' + n + ' kali, Silahkan coba lagi\n')
        console.log('pertanyaan:' + qna[i].question)
        n++
        if (n > 3) {
            rl.close()
        }
        rl.prompt()
    }
}).on('close', () => {
    console.log('Anda Berhasil!');
    process.exit(0);
});