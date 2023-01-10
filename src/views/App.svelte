<script>
  import UI from "../js/UI";
  
  import Loader from './screens/Loader/Loader.svelte';
  import Rules from './screens/Rules/Rules.svelte';
  import Theme from './screens/Theme/Theme.svelte';
  import Player from './screens/Player/Player.svelte';
  import Draw from './screens/Draw/Draw.svelte';
  import Question from './screens/Question/Question.svelte';
  import Counter from './screens/Counter/Counter.svelte';
  import Point from './screens/Point/Point.svelte';

  const questionsGeneral = [
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
  ];

  const questions_18 = [    
    //Question sexe
    "Qui de vous deux Fait des mises en scènes ou des jeux de rôles pour pimenter sa vie sexuelle?",
    "Qui de vous deux A coucher avec le plus de personnes?",
    "Qui de vous deux A déjà fait un plan à 3 ou plus?",
    "Qui de vous deux Jouit de manière ridicule?",
    "Qui de vous deux Détient plus de 3 accessoires sexuels?",
    "Qui de vous deux Regarde régulièrement de la pornographie?",
    "Qui de vous deux N'embrasse pas avec la langue?",
    "Qui de vous deux A déjà fait des selfies érotiques?",
    "Qui de vous deux A fait une sextape pour voir à quoi il/elle ressemble en pleine action?",
    "Qui de vous deux A déjà couché dans une boite de nuit?",
    "Qui de vous deux A déjà couché dans les transports en commun (bus, métro, train, avion etc.)",
    "Qui de vous deux Parle beaucoup de sexe mais ne fait pas grand chose?",
    "Qui de vous deux A des jumelles près de sa fenêtre dans l'espoir d'observer les voisins sous la douche?",
    "Qui de vous deux Aime se faire sucer les doigts de pieds?",
    "Qui de vous deux S'enfuit discrètement au réveil après un coup d'un soir?",
    "Qui de vous deux Regarde en dessous des cabines à la piscine?",
    "Qui de vous deux Dit 'merci' après l'amour?",
    "Qui de vous deux Aimerait apprendre l'art du bondage?",
    "Qui de vous deux Possède un exemplaire du Kâmasûtra pour étudier le sujet sous tous les angles?",
    "Qui de vous deux A déjà eu un rapport sexuel avec quelqu'un ayant 10 ans de plus que son âge?",
    "Qui de vous deux Embrasse le mieux?",
    "Qui de vous deux A déjà répondu au téléphone pendant l'acte?",
    "Qui de vous deux Voudrait coucher avec lui-même si c'était possible?",
    "Qui de vous deux Détient une liste de ses conquêtes sexuelles?",
    "Qui de vous deux Pourrait rester abstinent durant une année entière?",
    "Qui de vous deux Est incapable de séparer sexe et sentiments?",
    "Qui de vous deux Utilise son crachat comme lubrifiant?",
    "Qui de vous deux Est le plus jeune à avoir eu son premier rapport sexuel?",
    "Qui de vous deux Parle sans tabou de sexualité avec ses parents?",
    "Qui de vous deux A déjà couché avec un de ses professeurs ou supérieurs hiérarchiques?",
    "Qui de vous deux Connait la signification des acronymes FILF, DP, POV et BBC?",
    "Qui de vous deux S'est déjà masturbé pendant qu'un ami dormait dans la même pièce?",
    "Qui de vous deux A déjà couché avec un étranger dans un autre pays?",
    "Qui de vous deux A le plus de connaissances en termes de sexualité?",
    "Qui de vous deux Est le plus bestial au lit?",
    "Qui de vous deux A la plus grosse libido?",
    "Qui de vous deux Aime se faire lécher les lobes de l'oreille?",
    "Qui de vous deux Parle sur des forums pour savoir si sa sexualité est normale?",
    "Qui de vous deux Est le plus exhibitionniste?",
    "Qui de vous deux A couché avec 2 personnes de la même famille?",
    "Qui de vous deux Ne jure que par la position du missionnaire?",
    "Qui de vous deux Est déjà allé dans un club libertin?",
    "Qui de vous deux Est émoustillé par les bruits de bouche (ASMR)?",
    "Qui de vous deux A déjà acheté des préservatifs goût fraise?",
    "Qui de vous deux A déjà été en relation libre?",
    "Qui de vous deux A déjà fait un strip tease pour quelqu'un?",
    "Qui de vous deux Met du déodorant dans ses sous-vêtements ?",
    "Qui de vous deux Aime qu'on les regarde/surprenne/entende pendant l'acte?",
    "Qui de vous deux Serait capable d'avoir un rapport sexuel sur son lieu de travail?",
    "Qui de vous deux A déjà utilisé des glaçons ou de la nourriture pendant l'acte?",
    "Qui de vous deux Est trop honnête pour simuler?",
    "Qui de vous deux A déjà payé pour du sexe ou du contenu érotique?",
    "Qui de vous deux A eu un rapport sexuel le plus récemment?",
    "Qui de vous deux Fais le plus passer le plaisir de l'autre avant le sien?",
    "Qui de vous deux Pourrait avoir un piercing ou un tatouage au niveau des parties génitales?",
    "Qui de vous deux Écris ou dessine des obscénités dans les toilettes publiques?",
    "Qui de vous deux A déjà eu des brûlures de tapis?",
    "Qui de vous deux Prends des notes sur chaque rapport sexuel?",
    "Qui de vous deux A couché avec une personne déjà en couple?",
    "Qui de vous deux Aime avoir des marques sur son corps après un rapport sexuel? (ex: suçon, griffures)",
    "Qui de vous deux Préfère faire l'amour dans le noir?",
    "Qui de vous deux Aime qu'on le réchauffe avec une douche dorée?",
    "Qui de vous deux A un dossier nommé 'facture d'électricité' qui contient des dizaines de photos pornographiques?",
    "Qui de vous deux Ne peut pas faire l'amour sans une atmosphère ro-man-ti-que?",
    "Qui de vous deux Pense que 'les femmes fontaines' sont un mythe?",
    "Qui de vous deux Aime le plus se retrouver au dessus durant un rapport sexuel?",
    "Qui de vous deux A un fétichisme pour une partie du corps?",
    "Qui de vous deux Ne sais pas où se situe le point G?",
    "Qui de vous deux Ne couche pas le 1er soir?",
    "Qui de vous deux A déjà utilisé des sites de rencontres pour trouver des plans culs?",
    "Qui de vous deux Rêve de se faire lécher l'anus?",
    "Qui de vous deux Ne se lave jamais après le sexe?",
    "Qui de vous deux Se masturbe avec l'oreiller sur lequel il dort?",
    "Qui de vous deux Aime attacher son partenaire au lit?",
    "Qui de vous deux Refuse d'embrasser son partenaire sur la bouche après le sexe orale?",
    "Qui de vous deux A l'espoir de coucher avec l'un des participants?",
    "Qui de vous deux A déjà utilisé du poppers pour favoriser le sexe anal?",
    "Qui de vous deux A déjà uriné ou déféqué accidentellement pendant l'acte?",
    "Qui de vous deux A déjà perdu une capote usagé et l'a retrouvé seulement 1 an plus tard?",
    "Qui de vous deux Ne pourrait pas faire l'amour en présence d'un chat qui regarde?",
    "Qui de vous deux S'est déjà fait surprendre par un membre de sa famille pendant l'acte?",
    "Qui de vous deux A déjà réalisé la plupart de ses fantasmes?",
    "Qui de vous deux Prend plus de plaisir à manger un gâteau au chocolat que de se faire sucer/lécher?",
    "Qui de vous deux A le plus gros pénis?",
    "Qui de vous deux Est essouflé après 5min de sexe?",
    "Qui de vous deux Pense que la masturbation rend sourd et aveugle?",
    "Qui de vous deux Insulte son partenaire ou aime se faire insulter au lit?",
    "Qui de vous deux Pense que le clitoris est une espèce de scarabée?",
    "Qui de vous deux A déjà couché avec l'ex d'un ami?",
    "Qui de vous deux Adore qu'on lui donne la fessée?",
    "Qui de vous deux Se rase l'entre jambe pour dégager la piste?",
    "Qui de vous deux N'a jamais eu d'orgasme?",
    "Qui de vous deux A déjà pris du viagra?",
    "Qui de vous deux A le plus de sexe appeal?",
  ];

  let players = [
    {
      id: '14654',
      name: 'Jean Francois',
      point: '2'
    },
    {
      id: '84685',
      name: 'Bernard',
      point: 2
    },
    {
      id: '268542',
      name: 'Christophe',
      point: 2
    },
  ]

  let selectedPlayerIndex = 0
  let selectedPlayer
  let nameSelectedPlayer 
  let partyCounter = 0
  let questionsSelected
  let questionArray
  let allArrayQuestion = []
  let selectedArrayQuestion = []
  let questionAsked = []

  let start = () => {

    if (players.length === 0) {
      UIDesign.showAlert('Ajoutez les joueurs pour continuer', 'danger');
      console.log('Il faut plus de jouerus');      
    } else {

      if ( selectedPlayerIndex > players.length - 1) {        
        selectedPlayerIndex = 1
        partyCounter = partyCounter + 1
      } else {
        selectedPlayerIndex = selectedPlayerIndex + 1
      }

      selectedPlayer = players[selectedPlayerIndex - 1]
      nameSelectedPlayer = selectedPlayer.name

      UI.changeSectionHorizontal('player', 'draw')
    }
  }

  function draw() {
    questionsSelected = questionArray[(Math.random() * questionArray.length) | 0]
    while (questionAsked.includes(questionsSelected)) {
      questionsSelected = questionArray[(Math.random() * questionArray.length) | 0]
    }

    questionAsked.push(...[questionsSelected])
      console.log(questionAsked);
    UI.changeSectionHorizontal('draw', 'question')

    // if (questionAsked.includes(questionsSelected)) {
    //   console.log("cette question a déjà été posé");

    // }
    // } else {
    //   console.log("cette question n'a jamais été posé");

    // }
	}

  function validateSection() {
    let themesCSS = document.querySelectorAll('.selected')

    themesCSS.forEach(id => {
        let idTheme = id.getAttribute('id');
        allArrayQuestion.push(idTheme)
    })

    
    // compare les string et add on array
    allArrayQuestion.forEach(nameTheme => {
      if (nameTheme === 'QuestionGeneral') {
        let array = [questionsGeneral]
        selectedArrayQuestion.push(array);
      }
      if (nameTheme === 'QuestionAdulte') {
        let array = [questions_18]
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

        UI.changeSectionHorizontal('theme', 'player');

      } else {
        UIDesign.showAlert('Selectionnez un theme ou plusieurs', 'danger');
      }

    
	}  
  
  function win() {
    players[selectedPlayerIndex - 1].point = parseFloat(players[selectedPlayerIndex - 1].point) + 1

    UI.changeSectionHorizontal('point', 'player')
  }

  function loose() {

    UI.changeSectionHorizontal('point', 'player')
  }

</script>

<main class="main" id="main">
  <Loader/>
  <Rules/>
  <Theme {validateSection} {questionArray}/>
  <Player {selectedPlayer} {players} {start}/>
  <Draw {nameSelectedPlayer} {draw}/>
  <Question {questionArray} {questionsSelected} />
  <Counter/>
  <Point {win} {loose}/> 
  </main>

