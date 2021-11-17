var players = [];
var questions = [
   "qui de vous 2 dd",
   "qui de vous 2 ee",
   "qui de vous 2 zz",
   "qui de vous 2 ss",
   "qui de vous 2 mm",
];

var containerIncludePlayers = document.querySelector(".include_players");
var add = document.querySelector("#include_players");

var next = document.querySelector("#next");
var question = document.querySelector("#question");

var printPlayers = document.querySelector("#array_players");
var printPlayer = document.querySelector("#selectedplayer");
var selecteduestion = document.querySelector("#selectedquestion");
var decompte = document.getElementById("decomtpe")


function includePlayers(){
  if(add.value == ""){
      alert("Il faut rentrer le prénom d'un joueur");
   }
   else{
      var include_players = add.value;
      players.push(include_players);
      add.value = "";

      var node = document.createElement("li");                 // Create a <li> node
      var textnode = document.createTextNode(include_players);         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>
      printPlayers.appendChild(node); 
   }
}


next.onclick = function() {
    containerIncludePlayers.remove();
    let selectedPlayer = players[(Math.random() * players.length) | 0]

    var node = document.createElement("h1");                 // Create a <li> node
    var textnode = document.createTextNode(selectedPlayer + ' piochez une carte et choisissez deux joueurs de votre choix');         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    printPlayer.appendChild(node); 

    question.onclick = function() {
      let selectQuestion = questions[(Math.random() * questions.length) | 0]

      var node = document.createElement("h1");                 // Create a <li> node
      var textnode = document.createTextNode(selectQuestion);         // Create a text node
      node.appendChild(textnode);                              // Append the text to <li>
      selectedquestion.appendChild(node);
      
      decompte.classList.add('active');
   };
};



// initialise le temps
var cpt = 3;

const startdecompte = document.querySelector('.startdecompte')

startdecompte.onclick = function(){
   function testAsync(){
      return new Promise((resolve,reject)=>{
          //here our function should be implemented 
          setTimeout(()=>{
            alert("c'est fini !")
              resolve();
          ;} , 3000
          );
      });
  }
  
  async function callerFun(){
      setInterval(function(){
         if(cpt>0) // si on a pas encore atteint la fin
         {
             --cpt; // décrémente le compteur
             var Crono = document.getElementById("Crono"); // récupère l'id
             var old_contenu = Crono.firstChild; // stock l'ancien contenu
             Crono.removeChild(old_contenu); // supprime le contenu
             var texte = document.createTextNode(cpt); // crée le texte
             Crono.appendChild(texte); // l'affiche
             
         }
     }, 1000);
     await testAsync();
  }
  
  callerFun();
};