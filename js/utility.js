function hide(elementid){
     document.getElementById(elementid).classList.add("hidden")
}
function show(elementid){
     document.getElementById(elementid).classList.remove("hidden")
}

function getAlphabet(){
    const arr = "abcdefghijklmnopqrstuvwxyz"
    const p = arr.split('')
    const z = Math.random() * 25;
    const x = Math.round(z)
    const y = p[x]
    return y
}
 function setBg(elementid){
   document.getElementById(elementid).classList.add("bg-orange-400")
 }
 function RemoveBg(elementid){
   document.getElementById(elementid).classList.remove("bg-orange-400")
 }
 function setValue(elementid,z){
     const p = document.getElementById(elementid)
     p.innerText = z
 }
 function getvalue(elementid){
    return parseInt(document.getElementById(elementid).innerText)
 }