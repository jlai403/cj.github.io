<template>
	<transition name="fade">
		<div v-if="fadeIn" class="story-container">
			<p>
				<img src="@/assets/story.png"/>
				Raised in Calgary, AB, both of us crossed paths online during the 2020 pandemic. 
				After a few weeks of digital exchanges, our first face-to-face meeting unfolded at an outdoor park for a special ice skating date – an experience that marked Crystal's introduction to ice skating.
				<br/><br/>
				Fast forward many months later, after bonding and sharing common interests of trying new foods, restaurants and building new experiences together, 
				Joey officially asked Crystal to be his girlfriend on the same date a year later, during another ice skating date behind a breathtaking backdrop of the Lake Louise mountains.
			</p>
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

.story-container {
	display: grid;
	justify-content: start;
	align-items: center;
	width: 100%;
	height: 100%;
}

.story-container p {
	padding: 2rem;
}

.story-container img {
	max-width: 200px;
	filter: grayscale(75%);
	float: left;
	margin-right: 1rem;
	margin-bottom: 1rem;
}

.story-container p {
	color: var(--vt-c-white);
	font-family: 'Quattrocento', serif;
	text-align: left;
}

</style>
