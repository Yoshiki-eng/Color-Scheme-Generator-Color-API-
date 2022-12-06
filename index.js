const btn = document.getElementById('submit-btn')
const colorInput = document.getElementById('color-input')
const modeInput = document.getElementById('mode-input')
const colorEl = document.getElementById('color-container')

let colorArray = []

let isDarkMode = false 

btn.addEventListener('click', (e) => {
    
    e.preventDefault()
   
    let chosenColorWithSharp = colorInput.value
    let chosenColor = chosenColorWithSharp.replace('#', '')
    let chosenMode = modeInput.value
   
    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenMode}`)
    .then(res => res.json())
    .then(data => {     
        for(let i = 0; i < 5; i++){
            colorArray.push(data.colors[i].hex.value)
    
        }    
        
    let result = render(colorArray)
    colorEl.innerHTML = result
    colorArray = []  
    })
          
})

const render = (arr) => {
    let html = ``   
    for (let i= 0; i < arr.length; i++){
   
       html += `
       <div class="color-container">
            <div class="color-bar" style="background-color:${arr[i]}">
            </div>
            <p>${arr[i]}</p>
       </div>
       `   
    }
    return html
}