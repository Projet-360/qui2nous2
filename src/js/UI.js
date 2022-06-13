export default class UIDesign {
    constructor(){
        
    }

    static changeSectionHorizontal(present, entrant) {
        const containerPresent = document.getElementById(present)
        const containerEntrant = document.getElementById(entrant)

        containerEntrant.className = ''
        containerPresent.classList.remove("section-show")
        containerPresent.classList.add("section-out")
        containerEntrant.classList.add("section-show")

        setTimeout(returnSection, 500);
        setTimeout(cleanClassSection, 550);

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

        setTimeout(returnSection, 500);
        setTimeout(cleanClassSection, 550);
        setTimeout(cleanClassTimeOut, 4500);
        setTimeout(cleanClassFinish, 5000);

        function returnSection() {
            containerPresent.classList.remove("section-out")
            containerPresent.classList.add("section-return")
        }

        function cleanClassSection() {
            containerPresent.classList.remove("section-return")
        }

        function cleanClassTimeOut() {
            containerNext.classList.add("section-show")
            containerEntrant.classList.add("section-fade")
        }

        function cleanClassFinish() {
            containerEntrant.classList.remove("section-show")
            containerEntrant.classList.remove("section-fade")
        }
    }


    
    static discover() {
        const containerRules = document.getElementById('rules') 
    }

    static skip() {
        const containerRules = document.getElementById('rules')
        const containerTheme = document.getElementById('theme')
        containerRules.classList.remove("section-show")
        containerRules.classList.add("section-out")
        containerTheme.classList.add("section-show")
    }
  
}