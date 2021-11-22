let players = []

let questions = [
   "qui de vous 2 a le plus de merde dan le cul",
   "qui de vous 2 a la plus grosse bite",
   "qui de vous 2 est un puceau",
   "qui de vous 2 boufferai sa merde pour 1 million",
   "qui de vous 2 gratte le plafond",
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
const currentplayercontainer = document.querySelector('#currentplayer')




save.addEventListener('click', ajouteJoueur);
next.addEventListener('click', selectJoueur);
next.addEventListener('click',  selectQuestion);
question.addEventListener('click',  hidePioche);
startdecompte.addEventListener('click', Chrono);
iwin.addEventListener('click', iwinfunc);


nothing.addEventListener('click', nothingfunc);

function ajouteJoueur() {
  if(add.value == ""){
      alert("Il faut rentrer le prénom d'un joueur");
   }
   else{
      var include_players = add.value;
      let point = 0
      players.push({"name": include_players, "point": point});
      add.value = "";

     // printPlayers.write(players);
      var node = document.createElement("li");                 // Create a <li> node
      var textnode = document.createTextNode(include_players + ' - point:' + point);         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>
      printPlayers.appendChild(node); 

   }
}

function selectJoueur() {
   let selectedPlayer = players[(Math.random() * players.length) | 0]
   window.currentplayer = selectedPlayer
   console.log(selectedPlayer)

   currentplayercontainer.append(selectedPlayer.name)

    var node = document.createElement("h1");                 // Create a <li> node
    var textnode = document.createTextNode(selectedPlayer.name + ' piochez une carte et choisissez deux joueurs de votre choix');         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    printPlayer.appendChild(node); 

    containerajouteJoueur.classList.remove("active");
    containerQuestion.classList.add("active");
};

function selectQuestion() {
   pioche.style.display = "flex";
   questioncontainer.style.display = "none";
   question.onclick = function() {
      let selectQuestion = questions[(Math.random() * questions.length) | 0]

      var node = document.createElement("h1");                 // Create a <li> node
      var textnode = document.createTextNode(selectQuestion);         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>
      selectedquestion.appendChild(node);
      
      decompte.classList.add('active');
   };
};

function Chrono(){   
   function testAsync(){
      return new Promise((resolve,reject)=>{
          //here our function should be implemented 
          setTimeout(()=>{             
            containerQuestion.classList.remove("active");
            whoWin.classList.add("active");

            selectedquestion.innerHTML = " "; 
            printPlayers.innerHTML = " ";   
            document.querySelector("#selectedplayer").innerHTML = " "; 

            
              resolve();
          ;} , 1
          );
      });
  }
  
  async function callerFun(){
     await testAsync();
  }
  
  callerFun();
};

function iwinfunc() {
   let MyDiv2 = currentplayercontainer.innerHTML
   console.log('<- resultat de la variable - '+ MyDiv2 );

   let found = players.find(o => o.name == MyDiv2.replace(/\s+/g, ''));   
   console.log(found);

   found.point += 1
   
   found = null
   MyDiv2 = null
   printPlayers.innerHTML = " ";  
   currentplayercontainer.innerHTML = " "; 
   decompte.classList.remove("active");

   players.forEach(function(item){
      var node = document.createElement("li");                 // Create a <li> node
      var textnode = document.createTextNode(item.name + ' - point:' + item.point);         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>
      printPlayers.appendChild(node); 
   });

   whowin.classList.remove("active");
   containerajouteJoueur.classList.add("active");
   pioche.style.display = "none";
};

function nothingfunc() { 
   iwin.classList.remove("active");
   containerajouteJoueur.classList.add("active");
};

function hidePioche() {
   pioche.style.display = "none";
   questioncontainer.style.display = "flex";
}