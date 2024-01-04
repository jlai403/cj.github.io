<script setup lang="ts">
</script>

<template>
  <main class="hero-image">
    <div class="name">Crystal</div>
    <div class="and">────&emsp;and&emsp;────</div>
    <div class="name">Joey</div>
    <p class="sub-text">Since MMXXII.I.XXII</p>
  </main>
</template>

<style scoped>
.hero-image {
  border: 1px solid #ffffff80;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem 5rem;
  text-align: center;
}

.name {
  color: var(--vt-c-white);
  font-family: 'Quattrocento', serif;
  font-size: 5rem;
  letter-spacing: 1rem;
  line-height: 1.5;
  text-transform: uppercase;
}

.and {
  margin-top: -2rem;
  color: var(--vt-c-white);
  font-family: 'Allura', cursive;
  font-size: 2rem;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
}

.sub-text {
  color: var(--vt-c-black);
  font-family: 'Quattrocento', cursive;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

}
</style>