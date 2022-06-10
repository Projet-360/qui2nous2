import UIPlayer from './Class/UIPlayer.js'
import UIDesign from './Class/UIDesign.js'

class App {
  constructor() {
      this.createPreloader()
  }

  createPreloader() {
    window.addEventListener('load', function (event) {
      const loader = document.querySelector('#loader')
      const rules = document.querySelector('#rules')

      rules.classList.add("section-show")

      setTimeout(function () {
        loader.classList.add('is-opacity');
      }, 1000);
      setTimeout(function () {
        loader.classList.add('is-out');
      }, 1500);
    });
  }
  
}

new App()
