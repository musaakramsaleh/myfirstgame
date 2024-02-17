function continueGame(){
 const p = getAlphabet()
 const z = document.getElementById("playing")
 z.innerText = p
 setBg(p)
 
}

function buttonPress(event){
    const r = event.key 
    const z = document.getElementById("playing")
    const expected = z.innerText
    const final = expected.toLowerCase()
    if(r === final){
        let x = getvalue("yourscore")
        let p = ++x
        setValue("yourscore",p)
        RemoveBg(final)
        continueGame()
    }
    else{
        let w = getvalue("life")
        let y = --w
        setValue("life",y)
        if(y==0){
            gameover()
        }
    }
}
document.addEventListener("keyup",buttonPress)
function gotoPlay(){
    hide("hello")
    hide("final-area")
    show("play")
    continueGame()
    setValue("life",5)
    setValue("yourscore",0)
}
function gameover(){
    hide('play')
    show("final-area")
    const lastscore = document.getElementById("yourscore").innerText
    setValue("areafinal",lastscore)
    const x =document.getElementById("playing").innerText
    const y = x.toLowerCase()
    RemoveBg(y)
}