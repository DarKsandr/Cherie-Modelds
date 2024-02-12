<script setup lang="ts">
import Logo from '~/assets/svg/logo.svg';
import LogoBlack from '~/assets/svg/logo-black.svg';

const props = defineProps({
  color: {
    default: 'logo',
    type: String,
  },
});

const src = computed(() => {
  switch (props.color) {
    case 'black':
      return LogoBlack;
    default:
      return Logo;
  }
});
</script>

<template>
  <img :src="src" alt="Logo" />
</template>

<style scoped></style>
