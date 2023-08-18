
const astrology = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const strategy = ['lucky', 'bad luck'];
const luckyRate = [1,2,3,4,5,6,7,8,9,10];
let message = document.getElementById('message');
let btn = document.getElementById('button');


const randomComponent = (arr) => {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

const randomMessage = (arr1,arr2,arr3) => {
    return `The lucky rate is: ${randomComponent(arr3)} for ${randomComponent(arr1)} and today you have ${randomComponent(arr2)} `;
}

const showInfo = () =>{
    message.innerHTML = randomMessage(astrology,strategy,luckyRate);
    btn.removeEventListener('click',showInfo);
}


btn.addEventListener('click',showInfo);