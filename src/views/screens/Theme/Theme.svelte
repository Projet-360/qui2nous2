<script> 
  import UI from "../../../js/UI";

  function returnSection() {
    UI.changeSection('theme', 'rules')
	}
  function validateSection() {
    UI.changeSection('theme', 'player')
	}  

  let QuestionGeneral = false;
  let QuestionAdulte = false;
</script>
<section id="theme">
  <h1>Choisissez vos thèmes</h1>

  <ul class="themeUl">
    <div class="ThemeSelect" class:selected={QuestionGeneral} on:click="{() => QuestionGeneral = !QuestionGeneral}">
      <span>Générale</span>
    </div>
    <div class="ThemeSelect" class:selected={QuestionAdulte} on:click="{() => QuestionAdulte = !QuestionAdulte}">
      <span>-18</span>
    </div>
  </ul>

  <div class="bottom" id="bottom">

    <button on:click={returnSection}>
      <span>retour</span>
    </button>

    <button on:click={validateSection}>
      <span>Valider</span>
    </button>
  </div>


</section>