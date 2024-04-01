<script setup lang="ts">
import MailIcon from '~/assets/svg/mail.svg';
import VKIcon from '~/assets/svg/vk.svg';
import instagramIcon from '~/assets/svg/instagram-2.svg';
import telegramIcon from '~/assets/svg/telegram.svg';

const icons = [
  { src: MailIcon, alt: 'mail' },
  { src: VKIcon, alt: 'vk' },
  { src: instagramIcon, alt: 'instagram' },
  { src: telegramIcon, alt: 'telegram' },
];
</script>

<template>
  <div>
    <hr class="my-10" />
    <div class="flex justify-between">
      <IndexLinkCommon class="flex gap-20" />
      <div class="flex gap-8">
        <img
          v-for="(icon, index) in icons"
          :key="index"
          :src="icon.src"
          :alt="icon.alt"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
