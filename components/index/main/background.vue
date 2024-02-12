<script setup lang="ts"></script>

<template>
  <div class="main-bg" />
</template>

<style scoped>
.main-bg {
  position: absolute;
  background-image: url('/assets/img/06cfa099dabb5c04eee090e47da12715.png');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  filter: brightness(60%);
}
@media (max-width: 480px) {
  .main-bg {
    background-size: cover;
    background-position: 25%;
  }
}
</style>
