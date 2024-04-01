<script setup lang="ts">
import InstagramTitle from '~/assets/svg/instagram-title.svg';
import image1 from '~/assets/img/instagram/8d46bbef1fd9739bbe2751bfef48adc9.jpeg';
import image2 from '~/assets/img/instagram/32a4160fa16a4d502e7d7fbacb56798b.jpeg';
import image3 from '~/assets/img/instagram/8d46e03b84d50b9b6fdc89b08ecbfc09.jpeg';
import image4 from '~/assets/img/instagram/5c65dbaf07b2fe364e106bec7cb7e58c.jpeg';
import image5 from '~/assets/img/instagram/1b8c85e8284bcab8ff4b53d2b28a4434.jpeg';

const images = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image3 },
  { src: image4 },
  { src: image2 },
  { src: image5 },
  { src: image1 },
];
</script>
<template>
  <div>
    <img :src="InstagramTitle" alt="instagram" />
    <hr class="mt-10" />
    <div class="flex justify-center">
      <div class="image-container mt-10 flex gap-20 flex-wrap">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="`photo ${index + 1}`"
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 320px;
  height: 320px;
  object-fit: cover;
}
.image-container {
  width: 1120px;
}
</style>
