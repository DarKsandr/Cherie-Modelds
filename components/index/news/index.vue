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
      <div class="h1">Новости</div>
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

<style scoped>
.h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.04em;
  text-align: left;
}
</style>
