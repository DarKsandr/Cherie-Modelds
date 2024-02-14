<script setup lang="ts">
import type { PropType } from 'vue';
import type { Card } from '~/types/card';

defineProps({
  card: {
    required: true,
    type: Object as PropType<Card>,
  },
});
</script>

<template>
  <div>
    <div class="date">{{ card.month }} // {{ card.year }}</div>
    <div class="img mt-2">
      <img :src="card.img" alt="Photo" />
    </div>
    <div class="text-bold mt-2">{{ card.name }}</div>
    <div class="text mt-2">{{ card.text }}</div>
  </div>
</template>

<style scoped>
.date {
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
}
.img {
  width: 382px;
}
.text-bold {
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: -0.04em;
  text-align: left;
  text-transform: uppercase;
}
.text {
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;
  text-align: left;
  text-transform: uppercase;
}
</style>
