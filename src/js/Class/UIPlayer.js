import Player from './Player.js'
import UIDesign from './UIDesign.js'

import { QuestionGeneral, QuestionAdulte } from '../Questions/QuestionGeneral.js';

let selectedRow = null;
let arrayPlayer = []
let selectedPlayerIndex = 0
let selectedPlayer
let partyCounter = 0
let id
let questionArray = []


export default class UIPlayer {
    
    static displayplayer(){
      let newArrayPlayer
      newArrayPlayer = arrayPlayer
  
      let list = document.querySelector("#player-list");
      list.textContent = '';
      newArrayPlayer.forEach((player)=> UIPlayer.AddPlayerToList(player));        
    }
  
    static AddPlayerToList(player){
        const list=document.querySelector("#player-list");
        const row=document.createElement("tr");
        row.setAttribute('id', player.id);
        row.innerHTML=`
        <td>${player.title}</td>
        <td>${player.point}</td>
        <td><a href="#" class="btn btn-success btn-sm edit">Edit</a></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `
        list.appendChild(row); 
    }
  
    static deleteEmpyee(el){
        if(el.classList.contains("delete")){
          let getid = parseInt(el.parentElement.parentElement.id)
  
          let index = arrayPlayer.findIndex(x => x.id === getid);
  
          arrayPlayer.splice( index , 1);
  
          //el.parentElement.parentElement.remove();
          UIPlayer.displayplayer()
          UIDesign.showAlert("Player deleted", "danger");
        }else{
            null;
        }
    }
  
    static editPlayer(el){
        if(el.classList.contains('edit')){
          selectedRow = el.parentElement.parentElement;
  
          document.querySelector("#title").value = selectedRow.children[0].textContent
  
          document.querySelector(".sumbit_btn").value="Update";
          document.querySelector(".sumbit_btn").classList="btn btn-primary btn-block add-btn update_btn";
          document.querySelector(".update_btn").setAttribute('type', 'update');
  
          document.querySelector('.update_btn').addEventListener('click', (e) => {
            UIPlayer.changeName(el)
          },{ once: true })
            
        }else{null}
    }
  
    static changeName(el) {
      selectedRow = el.parentElement.parentElement;
      let getid = parseInt(selectedRow.id)
      let index = arrayPlayer.findIndex(x => x.id === getid);
      
      let valueArray = arrayPlayer[index].title
      let valueInput = document.querySelector("#title").value
  
    arrayPlayer[index].title = document.querySelector("#title").value
      UIPlayer.clearFields(); 
      UIPlayer.displayplayer()
  
      document.querySelector(".update_btn").value = "submit";
      document.querySelector(".update_btn").classList="btn btn-success btn-block add-btn sumbit_btn";
      document.querySelector(".sumbit_btn").setAttribute('type', 'submit');
    
    selectedRow = null;
    UIDesign.showAlert('Player Info Edited', 'info');  
    }
  
    static clearFields() {
      document.querySelector('#title').value = '';
    }

    static addPlayer(e, id) {
        e.preventDefault();
      
        const title = document.querySelector('#title').value;
      
        if(title === '') {
          UIDesign.showAlert('Please fill in all fields', 'danger');
        } else {
          
          id = Date.now()
          const player = new Player(title, id);
          arrayPlayer.push(player)
          
          UIPlayer.AddPlayerToList(player);
          selectedRow = null;
          UIDesign.showAlert('Player Added', 'success');
    
          UIPlayer.clearFields();
        }
    }


    static startGame() {
      if (arrayPlayer.length === 0) {
        console.log('vous devez entrer des joueurs');
    
      } else {
        if ( selectedPlayerIndex > arrayPlayer.length - 1) {
          selectedPlayerIndex = 1
          partyCounter = partyCounter + 1
        } else {
          selectedPlayerIndex = selectedPlayerIndex + 1
        }
    
        selectedPlayer = arrayPlayer[selectedPlayerIndex - 1]
    
        let questionsSelected = questionArray[(Math.random() * questionArray.length) | 0]
    
        const playerContainer = document.getElementById('player-container')
    
        playerContainer.style.opacity = "0"
        setTimeout(function(){
          playerContainer.style.display = "none"
        }, 10);
    
        const piocherContainer = document.getElementById('piocher-container')
    
        piocherContainer.style.display = "block"
        setTimeout(function(){
          piocherContainer.style.opacity = "1"
        }, 10);
    
    
    
        const displayPlayerselected = document.querySelector("#piocher-container-title");
        displayPlayerselected.innerHTML=` ${selectedPlayer.title} piochez une question !`
    
        const list = document.querySelector("#question-container #question");
        list.innerHTML=`
        Choisissez deux joueurs et posez leur cette question <br>
        une fois la question posée lancer le compte a rebour<br>
         ${questionsSelected}
        `
      }
    }

    static win() {
      selectedPlayer.point = selectedPlayer.point + 1  
      UIPlayer.displayplayer();
    
      const winnerContainer = document.getElementById('winner-container')
      winnerContainer.style.opacity = "0"
      setTimeout(function(){
        winnerContainer.style.display = "none"
      }, 10);
    
      const playerContainer = document.getElementById('player-container')
      
      playerContainer.style.display = "block"
      setTimeout(function(){
        playerContainer.style.opacity = "1"
      }, 10);
    }

    static loose() {
      const winnerContainer = document.getElementById('winner-container')
      winnerContainer.style.opacity = "0"
      setTimeout(function(){
        winnerContainer.style.display = "none"
      }, 10);
    
      const playerContainer = document.getElementById('player-container')
      
      playerContainer.style.display = "block"
      setTimeout(function(){
        playerContainer.style.opacity = "1"
      }, 10);
    }

    static selectTheme(id) {
      id.forEach(element => {
        element.addEventListener('click', () => {        
          let id = element.getAttribute('id');
          element.classList.toggle("selectedTheme");        
        })
      })
    }

    static getQuestionArray() { 
      let themesCSS = document.querySelectorAll('.selectedTheme')
      let allArrayQuestion = []
      let selectedArrayQuestion = []
      
      // récupère les id de chaque li
      themesCSS.forEach(id => {
        let idTheme = id.getAttribute('id');
        allArrayQuestion.push(idTheme)
      })

      // compare les string et add on array
      allArrayQuestion.forEach(nameTheme => {
        if (nameTheme === 'QuestionGeneral') {
          let array = [QuestionGeneral]
          selectedArrayQuestion.push(array);
        }
        if (nameTheme === 'QuestionAdulte') {
          let array = [QuestionAdulte]
          selectedArrayQuestion.push(array);
        }
      })

      //Aplati le tableau
      function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
      }

      function randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }
      let mergedArray = flatten(selectedArrayQuestion)
      let finalArray = randomize(mergedArray)
      questionArray = finalArray

      if (questionArray.length > 0 ) {
        let container = document.getElementById('theme')
        container.style.opacity = '0'
        setTimeout(
          container.style.visibility = 'hidden'
          , 1000);
      }
    }

}