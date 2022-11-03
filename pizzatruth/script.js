let calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', function(){

    let age = document.getElementById('age').value;
    let pizzas = document.getElementById('pizzas').value;

    let totalAmountOfPizzas = pizzas * 12 * age;

    let result = document.getElementById('result');

    for(let i = 0; i < totalAmountOfPizzas; i++){
        
        let img = document.createElement('img');
        img.src = 'pizza-small.png'
        let rotation = Math.floor(Math.random() * 360);
        img.style.transform = "rotate("  + rotation +  "deg)";
        result.appendChild(img);

    }
   
})