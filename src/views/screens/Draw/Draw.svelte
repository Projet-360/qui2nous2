<script>
import Hand from "./x/Hand.svelte";
import UI from "../../../js/UI";

export let nameSelectedPlayer



function draw() {
    UI.changeSectionHorizontal('draw', 'question')
	}
</script>
<section id="draw">
    <div id="piocher-container-title">
      <h1>{nameSelectedPlayer}</h1>
      <Hand/>
      <h1>C'est à toi</h1>
    </div>
    <div class="bottom" id="bottom">
      <button class="ThemeSelect" on:click={draw}>
        <span>Piocher une carte</span>
      </button>
    </div>
  </section>