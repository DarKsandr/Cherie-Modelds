<script setup lang="ts">
const currentSlide = ref(0);

const leftSlide = () => {
  currentSlide.value -= 1;
};

const rightSlide = () => {
  currentSlide.value += 1;
};
</script>

<template>
  <div>
    <div class="flex justify-between">
      <TypographyHTag>Новости</TypographyHTag>
      <div class="flex gap-7">
        <button type="button" @click="leftSlide">
          <img src="/assets/svg/arrow-black-left.svg" alt="Arrow Left" />
        </button>
        <button type="button" @click="rightSlide">
          <img src="/assets/svg/arrow-black-right.svg" alt="Arrow Right" />
        </button>
      </div>
    </div>
    <hr class="mt-10" />
    <IndexNewsCards v-model="currentSlide" class="mt-10" />
  </div>
</template>

<style scoped></style>
