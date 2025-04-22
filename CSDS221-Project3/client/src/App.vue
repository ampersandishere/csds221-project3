<script setup>
import PostComponent from './components/PostComponent.vue'
</script>

<template>
  <header class="app-header">
    Matthew's Message Board!
  </header>

  <main>
    <PostComponent/>
  </main>
</template>

<style scoped>
.background {
  background-color: aliceblue;
}

header {
  line-height: 1.5;
}

.app-header {
  color: dodgerblue;
  font-size: 50px;
  text-align: center;
  text-shadow: 1px 1px black;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
