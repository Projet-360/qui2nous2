<script>
import Logo from "./x/Logo-rules.svelte";
import UI from "../../../js/UI";

  function discover() {
		UI.discover()
	}

  function skip() {
		//UI.skip()

    UI.changeSectionHorizontal('rules', 'theme')
	}

</script>

<section id="rules">
    <Logo/>
    <h1>
      <span>Connaissez-vous <br>les règles ?</span>
    </h1>
    <div class="bottom" id="bottom">
      <button on:click={discover}>
        <span>Découvrir !</span>
      </button>
      <button on:click={skip} data="theme">
        <span>Passer</span>
      </button>
    </div>
</section>