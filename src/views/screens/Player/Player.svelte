<script>
  import UIPlayer from "../../../js/Class/UIPlayer";
  import Player from "../../../js/Class/Player";
  import UI from "../../../js/UI";

  import Trash from "./x/Trash";
  import Pen from "./x/Pen";
  import Add from "./x/Add";

  let data = {
    id: null,
    name: "",
    point: 0,
  };
  let players = [
    {
      id: 1,
      name: "Valerie",
      point: 0,
    },
    {
      id: 2,
      name: "Jack",
      point: 0,
    }
  ]

  $: value = players.name;
  let selectedPlayer  

  let isEdit = false;
  let isOpen = false;
  let active = false;
  let valueUpdate = "";
  

  let cardActive = () => {
		active = !active;
	}
  
  let addPlayer = () => {
    const newPlayer = {
      id: Date.now(),
      name: data.name,
      point: 0,
    };

    players = players.concat(newPlayer);
    data = {
      name: "",
    };
    isOpen = !isOpen;
  };

  let deletePlayer = (id) => {
    players = players.filter(player => player.id !== id);
  };
  
  let updatePlayer = (player) => {
    isOpen = !isOpen;
    isEdit = !isEdit;
    valueUpdate = '';

    valueUpdate = player.name;
    selectedPlayer = player;
  };

  let submitUpdatePlayer = (player) => {

    let playerDB = {
      id: player.id,
      name: valueUpdate,
      point: player.point,
    };

    let objIndex = players.findIndex(obj => obj.id == playerDB.id);
    players[objIndex] = playerDB;
    data = {
      name: "",
    };    

    isOpen = false;
    isEdit = false;
  };

  function returnSection() {
    UI.changeSection('player', 'theme')
  }

  function start() {
    UI.changeSection('player', 'theme')
  }
   
</script>

<section id="player">
      <h1>Joueurs</h1>
      <div class="container-form" class:active={isOpen}>
        <form id="player-form" autocomplete="off">
          <div class="form-group">
            {#if isEdit === false}
              <input bind:value={data.name} type="text" id="title" class="form-control" placeholder="Nom du joueur" >
              <div id="bottom">
                <button on:click|preventDefault="{() => isOpen = !isOpen}">
                  <span>retour</span>
                </button>
                <button on:click|preventDefault={addPlayer}>
                  <span>Ajouter</span>
                </button>
              </div>

            {:else}
              <input bind:value={valueUpdate} type="text" id="title" class="form-control" placeholder="Nom du joueur" >
              <div id="bottom">
                <button on:click|preventDefault="{updatePlayer(selectedPlayer)}">
                  <span>retour</span>
                </button>
                <button on:click|preventDefault={submitUpdatePlayer(selectedPlayer)}>
                  <span>Modifier</span>
                </button>
              </div>
            {/if}
          </div>          
        </form>
      </div>
      <div class="player-list">
        {#each players as player}
        <div class="card"  	class:active="{cardActive ===  player.name}"
                            on:click="{() => cardActive =  player.name}">
          <span>
            <div class="name">
              {player.name}  
            </div>
            <div class="point">
              {player.point}
            </div>
          </span>
          <div class="edit">
            <div class="update" on:click|preventDefault={updatePlayer(player)}>
              <Pen/>
            </div>
            <div class="delete" on:click|preventDefault={deletePlayer(player.id)}>
              <Trash/>
            </div>
          </div>
        </div>
        {/each}
      </div>

      <div class="addPlayer" on:click|preventDefault="{() => isOpen = !isOpen}">
        <span>
          <Add/>
        </span>
      </div>
      <div class="bottom" id="bottom">
        <button on:click|preventDefault={returnSection}>
          <span>Retour</span>
        </button>
        <button on:click|preventDefault={start}>
          <span>Commencer !</span>
        </button>
      </div>

  </section>