export default class UIDesign {
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

    static changeSectionHorizontal(present, entrant) {
        const containerPresent = document.getElementById(present)
        const containerEntrant = document.getElementById(entrant)

        containerEntrant.className = ''
        containerPresent.classList.remove("section-show")
        containerPresent.classList.add("section-out")
        containerEntrant.classList.add("section-show")

        setTimeout(returnSection, 400);
        setTimeout(cleanClassSection, 450);

        function returnSection() {
            containerPresent.classList.remove("section-out")
            containerPresent.classList.add("section-return")
        }

        function cleanClassSection() {
            containerPresent.classList.remove("section-return")
        }
    }

    static changeSectionCounter(present, entrant, next) {
        const containerPresent = document.getElementById(present)
        const containerEntrant = document.getElementById(entrant)
        const containerNext = document.getElementById(next)

        containerEntrant.className = ''
        containerPresent.classList.remove("section-show")
        containerPresent.classList.add("section-out")
        containerEntrant.classList.add("section-show")

        setTimeout(returnSection, 400);
        setTimeout(cleanClassSection, 450);
        setTimeout(cleanClassTimeOut, 4500);
        setTimeout(cleanClassFinish, 5500);

        function returnSection() {
            containerPresent.classList.remove("section-out")
            containerPresent.classList.add("section-return")
        }

        function cleanClassSection() {
            containerPresent.classList.remove("section-return")
        }

        function cleanClassTimeOut() {
            containerNext.classList.add("section-show")
            containerEntrant.classList.add("section-out")
            containerEntrant.classList.remove("section-show")
        }

        function cleanClassFinish() {
            containerEntrant.classList.remove("section-out")
        }
    }
    
    static discover() {
        const containerRules = document.getElementById('rules') 
    }  
}
new UIDesign()