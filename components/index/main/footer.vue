<script setup lang="ts"></script>

<template>
  <div class="flex justify-between">
    <div>Международное модельное агенство</div>
    <IndexSocialNetwork class="social-network flex gap-10" />
  </div>
</template>

<style scoped>
@media (max-width: 480px) {
  .social-network {
    display: none;
  }
}
</style>
