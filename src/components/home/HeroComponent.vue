<template>
	<transition name="fade">
		<div v-if="fadeIn" class="hero-image">
			<p class="sub-text">Since MMXXII.I.XXII</p>
			<div class="name">Crystal</div>
			<div class="and">────&emsp;and&emsp;────</div>
			<div class="name">Joey</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

const fadeIn = ref(false);
onMounted(() => {
	fadeIn.value = true;
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.hero-image {
	display: block;
}
</style>
