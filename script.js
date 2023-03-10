const input = document.getElementById("input")
const gm = document.getElementById("grams")
const kg = document.getElementById("kilograms")
const ons = document.getElementById("ounces")
function handleOnchange(e){
    
    if(isNaN(e.target.value)){
        input.value = "Input must be Number"
        return
    } 
    if(e.target.value===""){
        gm.innerText = `0`;
        kg.innerText = `0`
        ons.innerText = `0`
        return
    }
    let value = parseFloat(e.target.value)
    let grams =  (value * 453.592).toFixed(4)
    let kilogram = (grams/1000).toFixed(4)
    let ounce = (16 * value).toFixed(4)
    gm.innerText = `${grams} g`;
    kg.innerText = `${kilogram} kg`
    ons.innerText = `${ounce} oz`
}
input.addEventListener("change",handleOnchange) 