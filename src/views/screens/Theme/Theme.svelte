<script> 
  import UI from "../../../js/UI";
  
  export let validateSection 
    
  let QuestionGeneral = false;
  let QuestionAdulte = false;
  
  function returnSection() {
    UI.changeSectionHorizontal('theme', 'rules')
	}

</script>
<section id="theme">
  <h1>Choisissez vos thèmes</h1>

  <ul class="themeUl">
    <div class="ThemeSelect" id="QuestionGeneral" class:selected={QuestionGeneral} on:click="{() => QuestionGeneral = !QuestionGeneral}">
      <span>Générale</span>
    </div>
    <div class="ThemeSelect" id="QuestionAdulte" class:selected={QuestionAdulte} on:click="{() => QuestionAdulte = !QuestionAdulte}">
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