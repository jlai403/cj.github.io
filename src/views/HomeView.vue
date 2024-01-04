<script setup lang="ts">
</script>

<template>
  <main class="home">
    <router-view/>
  </main>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/story" class="nav-link">Story</router-link>
    <router-link to="/memories" class="nav-link">Memories</router-link>
  </nav>

</template>

<style>
.router-link-exact-active {
  font-weight: bold !important;
}

.home {
  border: 1px solid #ffffff80;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem 5rem;
  text-align: center;
  height: 350px;
  width: 600px;
  display: grid;
  justify-content: center;
  align-items: center;
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

nav {
  padding-top: 1rem;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
}

.nav-link:first-of-type {
  border: none;
}
.nav-link {
  color: var(--vt-c-black);
  text-transform: uppercase;
  border-left: 1px solid var(--vt-c-black);
  padding: 0 1rem;
}
</style>