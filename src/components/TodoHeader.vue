<template>
  <header>
    <h1>
      <span class="headerText animated bounce">TODO it!</span>
    </h1>
    <div class="date">
      <Time></Time>
    </div>
    <Navigation></Navigation>
  </header>
</template>

<script>
import Time from './Time.vue'
import Navigation from './Navigation.vue'

export default {
  components: {
    Time,
    Navigation
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  h1{
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
  .headerText {
    animation-delay: 1s;
    display: inline-block;
  }
</style>
