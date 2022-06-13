<script>
   export let win
   export let loose

</script>
<section id="point">
  <button class="ThemeSelect" on:click={win}>
    <span>J'ai gagné</span>
  </button>
  <button class="ThemeSelect" on:click={loose}>
    <span>Ils on gagné</span>
  </button>
  </section>