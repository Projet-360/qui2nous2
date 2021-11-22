let players = []

let questions = [
   "qui de vous deux sent le plus du cul",
   "qui de vous deux a la plus grosse bite",
   "qui de vous deux s'est dépuceler le premier",
   "qui de vous deux boufferai sa merde pour 1 million",
   "qui de vous deux se masturbe le plus",
   "qui de vous deux chante le mieux",
   "qui de vous deux casse le plus les couilles",
   "qui de vous deux aime le plus la sodomie",
];

const containerajouteJoueur = document.querySelector(".include_players");
const add = document.querySelector("#include_players");

let selectedPlayer
// initialise le temps
var cpt = 3;

const save = document.querySelector("#save");
const next = document.querySelector("#next");
const question = document.querySelector("#question");
const questioncontainer = document.querySelector(".question");

const pioche = document.querySelector("#pioche");

const printPlayers = document.querySelector("#array_players");
const printPlayer = document.querySelector("#selectedplayer");
const selectedquestion = document.querySelector("#selectedquestion");
const decompte = document.getElementById("decomtpe")
const containerQuestion = document.getElementById("container-selectedplayer")

const whoWin = document.getElementById("whowin")
const iwin = document.getElementById("iwin")
const nothing = document.getElementById("nothing")
const startdecompte = document.querySelector('.startdecompte')
const startdeAnim = document.querySelector('.chronoanim')
const currentplayercontainer = document.querySelector('#currentplayer')




save.addEventListener('click', ajouteJoueur);
next.addEventListener('click', selectJoueur);
next.addEventListener('click', selectQuestion);
question.addEventListener('click', hidePioche);
startdecompte.addEventListener('click', Chrono);
iwin.addEventListener('click', iwinfunc);



add.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        ajouteJoueur();
    }
});

nothing.addEventListener('click', nothingfunc);

function ajouteJoueur() {
   if (add.value == "") {
      alert("Il faut rentrer le prénom d'un joueur");
   }
   if (add.value == "") {
      alert("Il faut rentrer le prénom d'un joueur");
   }
    else {
      var include_players = add.value;
      let point = 0
      players.push({
         "name": include_players,
         "point": point
      });
      add.value = "";
      
      textnode = `
         <li class="array_players-item">
            <div class="top">
            <span>Joueur:</span><br>
            ${include_players}
            </div>
            <div class="bottom">
            <span>Nombre de point:</span><br>
            ${point} 
            </div> 
         </li>
         `;
      printPlayers.insertAdjacentHTML('afterbegin', textnode);

   }
}

function selectJoueur() {
   let selectedPlayer = players[(Math.random() * players.length) | 0]
   window.currentplayer = selectedPlayer

   currentplayercontainer.append(selectedPlayer.name)

   // Create a text node
   textnode = `
    <h1>
    ${selectedPlayer.name}, piochez une question
    </h1>
    `;
   printPlayer.insertAdjacentHTML('afterbegin', textnode);


   containerajouteJoueur.classList.remove("active");
   containerQuestion.classList.add("active");
};

function selectQuestion() {
   pioche.style.display = "flex";
   questioncontainer.style.display = "none";

   question.onclick = function () {
      let selectQuestion = questions[(Math.random() * questions.length) | 0]

      textnode = `
      <p>
      choisissez deux joueurs de votre choix et posez leur cette question
      </p>
      <h1>
      ${selectQuestion}
      </h1>
      `;
      selectedquestion.insertAdjacentHTML('afterbegin', textnode);

      decompte.classList.add('active');
   };
};

function Chrono() {
   startdeAnim.classList.add("active");

   function testAsync() {
      return new Promise((resolve, reject) => {
         //here our function should be implemented 
         const nums = document.querySelectorAll('.nums span');
         const counter = document.querySelector('.counter');
         const repl = document.getElementById('replay');
         
         runAnimation();
         
         function resetDOM() {
            counter.classList.remove('hide');
             
            nums.forEach(num => {
               num.classList.value = '';
            });
         
             nums[0].classList.add('in');
         }
         
         function runAnimation() {
            nums.forEach((num, idx) => {
               const penultimate = nums.length - 1;
               num.addEventListener('animationend', (e) => {
                  if(e.animationName === 'goIn' && idx !== penultimate){
                     num.classList.remove('in');
                     num.classList.add('out');
                  } else if (e.animationName === 'goOut' && num.nextElementSibling){
                     num.nextElementSibling.classList.add('in');
                  } else {
                     counter.classList.add('hide');
                  }
               });
            });
         }
         resetDOM();
         runAnimation();
         
         setTimeout(() => {
            containerQuestion.classList.remove("active");
            whoWin.classList.add("active");

            selectedquestion.innerHTML = " ";
            printPlayers.innerHTML = " ";
            document.querySelector("#selectedplayer").innerHTML = " ";
            startdeAnim.classList.remove("active");

            resolve();;
         }, 3000);
         
      });
   }



   async function callerFun() {  
      await testAsync();
   }

   callerFun();
};


function iwinfunc() {
   let MyDiv2 = currentplayercontainer.innerHTML

   let found = players.find(o => o.name == MyDiv2.replace(/\s+/g, ''));

   found.point += 1

   found = null
   MyDiv2 = null
   printPlayers.innerHTML = " ";
   currentplayercontainer.innerHTML = " ";
   decompte.classList.remove("active");

   players.forEach(function (item) {
      textnode = `
            <li class="array_players-item">
               <div class="top">
               <span>Joueur:</span><br>
               ${item.name}
               </div>
               <div class="bottom">
               <span>Nombre de point:</span><br>
               ${item.point} 
               </div> 
            </li>
            `;
      printPlayers.insertAdjacentHTML('afterbegin', textnode);
   });

   whowin.classList.remove("active");
   containerajouteJoueur.classList.add("active");
   pioche.style.display = "none";
};

function nothingfunc() {
   iwin.classList.remove("active");
   containerajouteJoueur.classList.add("active");
   whowin.classList.remove("active");

   found = null
   MyDiv2 = null
   printPlayers.innerHTML = " ";
   currentplayercontainer.innerHTML = " ";
   decompte.classList.remove("active");

   players.forEach(function (item) {
      textnode = `
            <li class="array_players-item">
               <div class="top">
               <span>Joueur:</span><br>
               ${item.name}
               </div>
               <div class="bottom">
               <span>Nombre de point:</span><br>
               ${item.point} 
               </div> 
            </li>
            `;
      printPlayers.insertAdjacentHTML('afterbegin', textnode);
   });
};

function hidePioche() {
   pioche.style.display = "none";
   questioncontainer.style.display = "flex";
}