
// hero slider function
//hämta title och listitems för slide
const heroSlider =document.getElementById('heroSlider');
const slides = heroSlider.querySelectorAll('li');

const heroHeader = document.getElementById('heroText');
const heroText = heroHeader.querySelectorAll('h1');

const slideCount = slides.length;
let slideIndex = 0;
//setinterval funktion  för göra sliden med index aktiv i css
setInterval(() =>{
    
    slides[slideIndex].classList.remove('active');
    heroText[slideIndex].classList.remove('active');
    slideIndex ++;

    if(slideIndex === slideCount){
        slideIndex = 0;
    }
    
    slides[slideIndex].classList.add('active');
    heroText[slideIndex].classList.add('active');
}, 4000);




// hamburger meny button function
//hämtar element 
const knapp = document.getElementsByClassName('hamburger')[0];
const navLinks = document.getElementsByClassName('navLinks')[0];
// på knapptryck toggla aktiv klass i css
knapp.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})



//form start

//hämta form input
const form = document.getElementById('contactForm');
const emailForm = document.getElementById('emailForm');
const messageForm = document.getElementById('messageForm');

const errorMessage =  document.getElementById('errorMessage')

//eventlyssnare validera krav för textfält
form.addEventListener('submit', (e) =>{
    let messages = []
    if(emailForm.value === '' || emailForm.value == null){
        messages.push('Du måste ange email');
    }
    if(messageForm.value === '' || messageForm.value == null){
        messages.push('Textfältet kan inte vara tomt');
    }
    if(messages.length > 0){
        e.preventDefault();
        errorMessage.innerText = messages.join(',');
    }
})





//knapp funktion för att visa rutan med fetch innehåll genom aktiv klass css

function showRecipe(){
    const window = document.getElementsByClassName('recept')[0];
    window.classList.toggle('active');
}
    
    


// API fetch - funktion för att hämta recept
recept();
function recept(){
    fetch('https://dummyjson.com/recipes/1')
// .then(response => response.json())
    .then(response => {
    if (!response.ok) { //skriv ut i konsol om den inte hittar ett svar 404
         throw new Error('Hämtning misslyckades' + response.statusText);
       }
       return response.json();
    })
    .catch( error => console.log('ERROR', error))
//konverterar response json
    .then(recipes => {
    
        const ingrLista = document.getElementById('ingrLista');
        const instructSteps = document.getElementById('instructions');
        var i = 0;
        //loopa igenom nyckeln ingredients och skapar listitem i DOM, ge värdet array[index]
        recipes.ingredients.forEach(ingredient => {
            ingred = document.createElement('li');
            ingred.textContent = `${recipes.ingredients[i]}`;
            i ++;
            ingrLista.appendChild(ingred);
        });
        //hämta title, ge värdet från nyckeln name
        const title = document.getElementById('recept-title');
        title.innerText = `${recipes.name}`;

        //skapa li på samma sätt som med ingredienser
        var n = 0;
        recipes.instructions.forEach(Instruction =>{
            stepList = document.createElement('li');
            stepList.textContent = `${recipes.instructions[n]}`;
            n ++;
            instructSteps.appendChild(stepList);
            
        })
    })
}
      
    
  
        
    
    

    
