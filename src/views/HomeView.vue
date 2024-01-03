<script setup lang="ts">
</script>

<template>
  <main class="splash-screen">
    <div class="name">Crystal</div>
    <div class="and">and</div>
    <div class="name">Joey</div>
  </main>
</template>

<style scoped>
.splash-screen {
  text-align: center;
}

.name {
  font-family: 'Buda', serif;
  text-transform: uppercase;
  font-size: 5rem;
  line-height: 1.5;
  letter-spacing: 1rem;
  color: var(--vt-c-white);
}

.and {
  color: var(--vt-c-white);
  font-family: 'Allura', cursive;
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -2rem;
  font-size: 2rem;
}
</style>