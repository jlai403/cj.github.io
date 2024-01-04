<template>
	<transition name="fade">
		<div v-if="fadeIn" class="story">
			STORY
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
.story {
	display: block;
}
</style>
