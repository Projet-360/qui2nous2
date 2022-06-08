let arrayPlayer = []

export default class UIDesign {
    constructor(){

    }
    
    static showAlert(message, className) {
        const div = document.createElement('div');
        const container = document.querySelector('main');;
  
  
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

  
        container.after(div, container);
        setTimeout(() => 
        document.querySelector('.alert').remove()
        , 1000);

      }

    static counter() {
    const questionContainer = document.getElementById('question-container')
    questionContainer.style.opacity = "0"
    setTimeout(function(){
        questionContainer.style.display = "none"
    }, 10);
    
    setTimeout(function() {
        const counterContainer = document.getElementById('counter-container')
        counterContainer.style.opacity = "0"
        setTimeout(function(){
        counterContainer.style.display = "none"
        }, 10);
    
        const winnerContainer = document.getElementById('winner-container')
    
        winnerContainer.style.display = "block"
        setTimeout(function(){
        winnerContainer.style.opacity = "1"
        }, 10);
    }, 3000);
    }

      

      static question() {
        const piocherContainer = document.getElementById('piocher-container')
        piocherContainer.style.opacity = "0"
        setTimeout(function(){
          piocherContainer.style.display = "none"
        }, 10);
      
        const questionContainer = document.getElementById('question-container')
        questionContainer.style.display = "block"
        setTimeout(function(){
          questionContainer.style.opacity = "1"
        }, 10);
      }
  
}