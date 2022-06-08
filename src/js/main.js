import UIPlayer from './Class/UIPlayer.js'
import UIDesign from './Class/UIDesign.js'
class App {
  constructor() {
      this.createPreloader()
      this.buttonManager()
      this.Theme()
  }

  createPreloader() {
    window.addEventListener('load', function (event) {
      const loader = document.querySelector('.loader')
  
      setTimeout(function () {
        loader.classList.add('is-opacity');
      }, 1000);
      setTimeout(function () {
        loader.classList.add('is-out');
      }, 1500);
    });
  }

  Theme() {
    const theme = document.querySelectorAll('.themeUl li')

    UIPlayer.selectTheme(theme)

    document.querySelector('#themeSubmit').addEventListener('click', (e) => {
      UIPlayer.getQuestionArray()
    });
  }

  buttonManager() {
    
    document.querySelector('#player-form').addEventListener('submit', (e) => {
      UIPlayer.addPlayer(e)
    });
    
    document.querySelector('#player-list').addEventListener('click', (e) => {
      UIPlayer.deleteEmpyee(e.target);
      UIPlayer.editPlayer(e.target);
    });
    
    document.querySelector('#start').addEventListener('click', () => {
      UIPlayer.startGame()
    })
    
    document.querySelector('#showquestion').addEventListener('click', () => {
      UIDesign.question()
    })
    
    document.querySelector('#showcounter').addEventListener('click', () => {
      UIDesign.counter()
    })
    
    document.querySelector('#addpoint').addEventListener('click', () => {
      UIPlayer.win()
    })
    
    document.querySelector('#refusepoint').addEventListener('click', () => {
      UIPlayer.loose()
    })

    document.querySelector('#addPlayer').addEventListener('click', () => {
      const container = document.querySelector('.container-form')
      container.style.opacity = "1"
      setTimeout(function(){
        container.style.visibility = "visible"
      }, 10);
    })
  }
}

new App()
