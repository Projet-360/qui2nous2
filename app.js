let players = []

let questions = [
"Qui de vous deux Giflerait sa mère pour 100€?",
"Qui de vous deux Dit tout haut ce que tout le monde pense tout bas?",
"Qui de vous deux Sait VRAIMENT garder un secret?",
"Qui de vous deux Pourrait en vouloir à un bébé d'avoir casser son téléphone?",
"Qui de vous deux Est le clown de sa bande de pote?",
"Qui de vous deux Ne vit que pour les commérages?",
"Qui de vous deux Adore s'afficher en public? / est insortable? => Fais souvent honte à ses potes en public?",
"Qui de vous deux Pourrait jeter des œufs sur un inconnu pour gagner un pari?",
"Qui de vous deux Accuse quelqu'un d'autre quand il pète en public?",
"Qui de vous deux Se mariera le premier?",
"Qui de vous deux Aime le plus l'autre?",
"Qui de vous deux A peur de l'engagement?",
"Qui de vous deux Dors avec ses chaussettes?",
"Qui de vous deux A déjà utilisé une brosse à dent qui ne lui appartient pas ?",
"Qui de vous deux Serait capable de manger du chien?",
"Qui de vous deux Mange des spaghetti au nutella pour le dîner?",
"Qui de vous deux Mange ce qui est tombé par terre?",
"Qui de vous deux Danserait sur la table en boite de nuit?",
"Qui de vous deux Fait des déclarations d'amour lorsqu'il est ivre?",
"Qui de vous deux Se battrait pour un ami s'il le lui demandait?",
"Qui de vous deux Ne laisserait pas sa place à une personne handicapée dans le métro?",
"Qui de vous deux Aurait bien besoin d'une thérapie?",
"Qui de vous deux Jalouse le plus l'autre?",
"Qui de vous deux Fais le plus confiance à l'autre?",
"Qui de vous deux A le plus d'influence sur l'autre?",
"Qui de vous deux Mangerait de la chair humaine s'il n'avait pas d'autres alternatives pour survivre?",
"Qui de vous deux Aimerait rester un enfant toute sa vie?",
"Qui de vous deux Ment le plus?",
"Qui de vous deux Ne s'excuse jamais?",
"Qui de vous deux Est un danger public sur la route?",
"Qui de vous deux A deux mains gauches?",
"Qui de vous deux A le plus gros quotient intellectuel (QI)?",
"Qui de vous deux Est le plus cultivé?",
"Qui de vous deux Parle anglais comme une vache espagnole ?",
"Qui de vous deux A le plus de conquêtes amoureuses?",
"Qui de vous deux A brisé le plus de cœur?",
"Qui de vous deux A le plus de mal à dire 'je t'aime'?",
"Qui de vous deux Crois au véritable Amour?",
"Qui de vous deux S'est déjà vomi dessus ou à déjà vomi sur quelqu'un d'autre?",
"Qui de vous deux Double dans les files d’attente ?",
"Qui de vous deux A le plus de choses à cacher?",
"Qui de vous deux Pourrait créer un faux profil pour stalker quelqu'un?",
"Qui de vous deux N'ira pas au paradis?",
"Qui de vous deux A déjà fait semblant d'être amoureux?",
"Qui de vous deux Finira seul avec 10 chats?",
"Qui de vous deux A 1000 ami(e)s sur les réseaux sociaux mais zéro dans la vraie vie?",
"Qui de vous deux Est le plus sexy?",
"Qui de vous deux Ne se lave que les jours de pluie?",
"Qui de vous deux Se mate dans tout ce qui ressemble de près ou de loin à un miroir?",
"Qui de vous deux Légaliserait toutes les drogues s'il en avait le pouvoir?",
"Qui de vous deux Pense que “liker” c'est tromper?",
"Qui de vous deux S’est déjà fait sortir de boite de nuit par la sécurité?",
"Qui de vous deux Met son slip sale à l’envers quand il/elle n’en a plus aucun de propre?",
//Question sexe
"Fait des mises en scènes ou des jeux de rôles pour pimenter sa vie sexuelle?",
"A coucher avec le plus de personnes?",
"A déjà fait un plan à 3 ou plus?",
"Jouit de manière ridicule?",
"Détient plus de 3 accessoires sexuels?",
"Regarde régulièrement de la pornographie?",
"N'embrasse pas avec la langue?",
"A déjà fait des selfies érotiques?",
"A fait une sextape pour voir à quoi il/elle ressemble en pleine action?",
"A déjà couché dans une boite de nuit?",
"A déjà couché dans les transports en commun (bus, métro, train, avion etc.)",
"Parle beaucoup de sexe mais ne fait pas grand chose?",
"A des jumelles près de sa fenêtre dans l'espoir d'observer les voisins sous la douche?",
"Aime se faire sucer les doigts de pieds?",
"S'enfuit discrètement au réveil après un coup d'un soir?",
"Regarde en dessous des cabines à la piscine?",
"Dit 'merci' après l'amour?",
"Aimerait apprendre l'art du bondage?",
"Possède un exemplaire du Kâmasûtra pour étudier le sujet sous tous les angles?",
"A déjà eu un rapport sexuel avec quelqu'un ayant 10 ans de plus que son âge?",
"Embrasse le mieux?",
"A déjà répondu au téléphone pendant l'acte?",
"Voudrait coucher avec lui-même si c'était possible?",
"Détient une liste de ses conquêtes sexuelles?",
"Pourrait rester abstinent durant une année entière?",
"Est incapable de séparer sexe et sentiments?",
"Utilise son crachat comme lubrifiant?",
"Est le plus jeune à avoir eu son premier rapport sexuel?",
"Parle sans tabou de sexualité avec ses parents?",
"A déjà couché avec un de ses professeurs ou supérieurs hiérarchiques?",
"Connait la signification des acronymes FILF, DP, POV et BBC?",
"S'est déjà masturbé pendant qu'un ami dormait dans la même pièce?",
"A déjà couché avec un étranger dans un autre pays?",
"A le plus de connaissances en termes de sexualité?",
"Est le plus bestial au lit?",
"A la plus grosse libido?",
"Aime se faire lécher les lobes de l'oreille?",
"Parle sur des forums pour savoir si sa sexualité est normale?",
"Est le plus exhibitionniste?",
"A couché avec 2 personnes de la même famille?",
"Ne jure que par la position du missionnaire?",
"Est déjà allé dans un club libertin?",
"Est émoustillé par les bruits de bouche (ASMR)?",
"A déjà acheté des préservatifs goût fraise?",
"A déjà été en relation libre?",
"A déjà fait un strip tease pour quelqu'un?",
"Met du déodorant dans ses sous-vêtements ?",
"Aime qu'on les regarde/surprenne/entende pendant l'acte?",
"Serait capable d'avoir un rapport sexuel sur son lieu de travail?",
"A déjà utilisé des glaçons ou de la nourriture pendant l'acte?",
"Est trop honnête pour simuler?",
"A déjà payé pour du sexe ou du contenu érotique?",
"A eu un rapport sexuel le plus récemment?",
"Fais le plus passer le plaisir de l'autre avant le sien?",
"Pourrait avoir un piercing ou un tatouage au niveau des parties génitales?",
"Écris ou dessine des obscénités dans les toilettes publiques?",
"A déjà eu des brûlures de tapis?",
"Prends des notes sur chaque rapport sexuel?",
"A couché avec une personne déjà en couple?",
"Aime avoir des marques sur son corps après un rapport sexuel? (ex: suçon, griffures)",
"Préfère faire l'amour dans le noir?",
"Aime qu'on le réchauffe avec une douche dorée?",
"A un dossier nommé 'facture d'électricité' qui contient des dizaines de photos pornographiques?",
"Ne peut pas faire l'amour sans une atmosphère ro-man-ti-que?",
"Pense que 'les femmes fontaines' sont un mythe?",
"Aime le plus se retrouver au dessus durant un rapport sexuel?",
"A un fétichisme pour une partie du corps?",
"Ne sais pas où se situe le point G?",
"Ne couche pas le 1er soir?",
"A déjà utilisé des sites de rencontres pour trouver des plans culs?",
"Rêve de se faire lécher l'anus?",
"Ne se lave jamais après le sexe?",
"Se masturbe avec l'oreiller sur lequel il dort?",
"Aime attacher son partenaire au lit?",
"Refuse d'embrasser son partenaire sur la bouche après le sexe orale?",
"A l'espoir de coucher avec l'un des participants?",
"A déjà utilisé du poppers pour favoriser le sexe anal?",
"A déjà uriné ou déféqué accidentellement pendant l'acte?",
"A déjà perdu une capote usagé et l'a retrouvé seulement 1 an plus tard?",
"Ne pourrait pas faire l'amour en présence d'un chat qui regarde?",
"S'est déjà fait surprendre par un membre de sa famille pendant l'acte?",
"A déjà réalisé la plupart de ses fantasmes?",
"Prend plus de plaisir à manger un gâteau au chocolat que de se faire sucer/lécher?",
"A le plus gros pénis?",
"Est essouflé après 5min de sexe?",
"Pense que la masturbation rend sourd et aveugle?",
"Insulte son partenaire ou aime se faire insulter au lit?",
"Pense que le clitoris est une espèce de scarabée?",
"A déjà couché avec l'ex d'un ami?",
"Adore qu'on lui donne la fessée?",
"Se rase l'entre jambe pour dégager la piste?",
"N'a jamais eu d'orgasme?",
"A déjà pris du viagra?",
"A le plus de sexe appeal?",
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