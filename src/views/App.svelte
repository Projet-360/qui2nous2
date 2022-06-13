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

  let start = () => {

    if (players.length === 0) {
      // UIDesign.showAlert('Ajoutez les joueurs pour continuer', 'danger');
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

      console.log(nameSelectedPlayer);
      UI.changeSectionHorizontal('player', 'draw')
    }
  }
  
  function win() {

    players[selectedPlayerIndex - 1].point = parseFloat(players[selectedPlayerIndex - 1].point) + 1

    console.log(players);

    UI.changeSectionHorizontal('point', 'player')
  }

  function loose() {
    console.log('loose');
    UI.changeSectionHorizontal('point', 'player')
  }

</script>

<main class="main" id="main">
  <Loader/>
  <Rules/>
  <Theme/>
  <Player {selectedPlayer} {players} {start}/>
  <Draw {nameSelectedPlayer}/>
  <Question/>
  <Counter/>
  <Point {win} {loose}/> 


  </main>

