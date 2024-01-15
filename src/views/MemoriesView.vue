<template>
  <nav>
    <a :href="lastPath" class="back">❮ Back</a>
    <h1>Memories</h1>
  </nav>
  <main class="memories">
    <a v-if="!authenticated" :href="GOOGLE_AUTH_LINK" class="login-with-google-btn">Sign in with Google</a>
    
    <Splide class="splide--dynamic" aria-labelledby="dynamic-slides-example-heading" :options="options" :has-track="false">
      <SplideTrack>
        <SplideSlide v-for="url in photos.map(x => x.baseUrl)" :key="url">
          <img :src="url"/>
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </main>
  <div>

  </div>
</template>

<script setup lang="ts">
import { useGoogleAuthStore } from '@/stores/googleAuth'
import { onBeforeMount, ref, type Ref } from 'vue';
// @ts-ignore
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const store = useGoogleAuthStore()
const authenticated = store.googleAccessToken ?? false
const lastPath = window.history.state.back;

const PHOTOS_SCOPE = 'https://www.googleapis.com/auth/photoslibrary';
const CLIENT_ID = '485750816166-l6lsdvc6odtdv58e7irov4eofapnkrfd.apps.googleusercontent.com';
const REDIRECT_URL = `${window.location.origin}/google`;
const GOOGLE_AUTH_LINK = `https://accounts.google.com/o/oauth2/v2/auth?scope=${PHOTOS_SCOPE}&include_granted_scopes=true&response_type=token&redirect_uri=${REDIRECT_URL}&client_id=${CLIENT_ID}`;
const photos: Ref<any[]> = ref([]);

const options: Options = {
  type: 'loop',
  autoplay: true,
  interval: 1500,
  pauseOnHover: false,
  pauseOnFocus: false,
  rewind : true,
  perPage: 1,
  gap    : '1rem'
};

onBeforeMount(() => {
  if (authenticated) {
    loadPhotoAlbum(store.googleAccessToken);
  }
});

async function loadPhotoAlbum(accessToken: string) {
  const albumsResponse = await fetch(`https://photoslibrary.googleapis.com/v1/albums?pageSize=50&access_token=${accessToken}`);
  const albumsJson = await albumsResponse.json();
  const album = albumsJson.albums.find((x: any) => x.title ==='crystal.jlai.ca');
  
  const albumResponse = await fetch(`https://photoslibrary.googleapis.com/v1/albums/${album.id}?access_token=${accessToken}`);
  const albumJson = await albumResponse.json();

  const mediaItemsResponse = await fetch(`https://photoslibrary.googleapis.com/v1/mediaItems:search?access_token=${accessToken}`, { 
    method: "POST",
    body: JSON.stringify({ albumId: albumJson.id, pageSize: 100 }) 
  });
  const mediaItemsJson = await mediaItemsResponse.json();
  photos.value.push(...mediaItemsJson.mediaItems)
}
</script>

<style scoped>

.back {
  position: absolute;
  margin-top: 0.5rem;
  left: 1rem;
}

.back:visited {
  text-transform: none;
  color: var(--vt-c-black);
}

nav {
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 1rem;
  text-align: center;
}

.memories {
  display: grid;
}

a.login-with-google-btn {
  transition: background-color .3s, box-shadow .3s;
    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  max-width: 200px;
}

a.login-with-google-btn:visited {
  background-color: white;
}

.splide {
  text-align: center;
  display: grid;
}

</style>