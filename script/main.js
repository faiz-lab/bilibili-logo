const style_sheets = `<style>
.logo {
    width: 200px;
    height: 150px;
    background: rgb(1, 177, 253);
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.logo::after {
    content: '';
    width: 20px;
    height: 30px;
    background: rgb(1, 177, 253);
    border-radius: 20px;
    position: absolute;
    bottom: -10px;
    left: 30px;
}

.logo::before {
    content: '';
    width: 20px;
    height: 30px;
    background: rgb(1, 177, 253);
    border-radius: 20px;
    position: absolute;
    bottom: -10px;
    right: 30px;
}

.logo-face {
    width: 160px;
    height: 110px;
    background: rgb(255, 255, 255);
    border-radius: 10%;
}

.left-line {
    width: 50px;
    height: 12px;
    border-radius: 12px;
    background: rgb(1, 177, 253);
    transform: rotate(45deg);
    position: absolute;
    top: -15px;
    left: 44px;
}

.right-line {
    width: 50px;
    height: 12px;
    border-radius: 12px;
    background: rgb(1, 177, 253);
    transform: rotate(135deg);
    position: absolute;
    top: -15px;
    right: 44px;
}

.left-eye {
    width: 40px;
    height: 16px;
    background: rgb(1, 177, 253);
    transform: rotate(-15deg);
    position: absolute;
    top: 50px;
    left: 40px;
    transition: transform 0.2s ease-out;
}

.right-eye {
    width: 40px;
    height: 16px;
    background: rgb(1, 177, 253);
    transform: rotate(15deg);
    position: absolute;
    top: 50px;
    right: 40px;
    transition: transform 0.2s ease-out;
}

.eye:hover .left-eye {
    transform: rotate(15deg);

}

.eye:hover .right-eye {
    transform: rotate(-15deg);

}

.left-nose {
    content: '';
    width: 15px;
    height: 15px;
    border: 5px solid rgb(1, 177, 253);
    border-radius: 12.5px 0 0 24.5px;
    border-color: transparent transparent rgb(1, 177, 253) rgb(1, 177, 253);
    transform: rotate(-45deg);
    position: absolute;
    bottom: 48px;
    left: 73px;
}

.right-nose {
    content: '';
    width: 15px;
    height: 15px;
    border: 5px solid rgb(1, 177, 253);
    border-radius: 12.5px 24.5px 0 0;
    border-color: rgb(1, 177, 253) rgb(1, 177, 253) transparent transparent;
    transform: rotate(135deg);
    position: absolute;
    bottom: 48px;
    right: 73px;
}

.end-of-nose {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid rgb(1, 177, 253);
    position: absolute;
    bottom: 57px;
}

かわいいミニテレビができたよ！
ヒント：おめめが動くよ〜！😊
</style>`

let n = 1
let intervalId = null
let period = 10
const codetext = style_sheets.substring(7, style_sheets.length - 8)

const handler = () => {
    n += 1
    if (n > style_sheets.length) {
        btn_play.textContent = 'リプレイ'
        clearInterval(intervalId)
        return
    }
    code.textContent = codetext.substring(0, n)
    demo.innerHTML = style_sheets.slice(0, n)
    codeblock.scrollTop = codeblock.scrollHeight
    hljs.highlightAll()
}

function play() {
    if (!intervalId) {
        intervalId = setInterval(handler, period)
    }
    if (n >= style_sheets.length) {
        n = 1
        code.textContent = ''
        demo.innerHTML = ''
        btn_play.textContent = '再生'
        intermediateSpeed()
    }
}

function pause() {
    clearInterval(intervalId)
    intervalId = null
}

function highSpeed() {
    pause()
    period = 1
    intervalId = setInterval(handler, period)
}

function lowSpeed() {
    pause()
    period = 20
    intervalId = setInterval(handler, period)
}

function intermediateSpeed() {
    pause()
    period = 10
    intervalId = setInterval(handler, period)
}

btn_play.addEventListener('click', play)
btn_pause.addEventListener('click', pause)
btn_fast.addEventListener('click', highSpeed)
btn_slow.addEventListener('click', lowSpeed)
btn_intermediate.addEventListener('click', intermediateSpeed)
