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

var selectedPlayer

var next = document.querySelector("#next");
var question = document.querySelector("#question");

var printPlayers = document.querySelector("#array_players");
var printPlayer = document.querySelector("#selectedplayer");
var selectedquestion = document.querySelector("#selectedquestion");
var decompte = document.getElementById("decomtpe")
var containerQuestion = document.getElementById("container-selectedplayer")

var whoWin = document.getElementById("whowin")
var iwin = document.getElementById("iwin")
var nothing = document.getElementById("nothing")


function includePlayers(){
  if(add.value == ""){
      alert("Il faut rentrer le prénom d'un joueur");
   }
   else{
      var include_players = add.value;
      players.push([include_players, 0]);
      add.value = "";

      players.map(function(num) {
         var node = document.createElement("li");                 // Create a <li> node
         var textnode = document.createTextNode(num[0] + ' - point:' + num[1]);         // Create a text node
         node.appendChild(textnode);                              // Append the text to <li>
         printPlayers.appendChild(node); 
       });

   }
}


next.onclick = function selectPlayer() {
    containerIncludePlayers.classList.remove("active");
    containerQuestion.classList.add("active");

    window.selectedPlayer = players[(Math.random() * players.length) | 0]
    

    var node = document.createElement("h1");                 // Create a <li> node
    var textnode = document.createTextNode(selectedPlayer[0] + ' piochez une carte et choisissez deux joueurs de votre choix');         // Create a text node
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
            containerQuestion.classList.remove("active");
            whoWin.classList.add("active");
            
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



iwin.onclick = function() {
   selectedPlayer[1] = +1
   
   iwin.classList.remove("active");
   containerIncludePlayers.classList.add("active");
};

nothing.onclick = function() { 
   iwin.classList.remove("active");
   containerIncludePlayers.classList.add("active");
};