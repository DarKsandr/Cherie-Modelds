<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const { data: cards } = await useFetch('/api/news');

const currentSlide = defineModel({ type: Number, required: true });
</script>

<template>
  <carousel v-model="currentSlide" :items-to-show="3.5" :wrap-around="true">
    <slide v-for="card in cards" :key="card">
      <IndexNewsCard :card="card" />
    </slide>
  </carousel>
</template>

<style scoped></style>
