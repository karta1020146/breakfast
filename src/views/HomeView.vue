<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import slide from '../components/slide.vue'
</script>

<template>
  <main>
    <div class="container">
      <slide/>
    </div>
  </main>
</template>
<style scoped>
  main{
    /* margin-top: var(--nav-h);
    height:calc( 100vh - var(--nav-h) ) ; */
    width: 100%;
    /* height: 200vh; */
    background-color: white;
  } 
</style>
