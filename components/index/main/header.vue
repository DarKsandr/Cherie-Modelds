<script setup lang="ts">
const isOpen = ref(false);
const openMenu = () => {
  isOpen.value = true;
};
const closeMenu = () => {
  isOpen.value = false;
};
watch(isOpen, (value) => {
  document.documentElement.style.overflowY = value ? 'hidden' : 'auto';
});
</script>

<template>
  <div class="flex justify-between items-center">
    <IndexLogo />
    <IndexLinkRegion class="header-link" />
    <IndexLinkCommon class="header-link flex gap-24 w-2/3" />
    <IndexLinkFallen class="header-link" />
    <img
      src="/assets/svg/menu.svg"
      alt="Menu"
      class="menu"
      aria-hidden="true"
      @click="openMenu"
    />
  </div>
  <IndexMainMobile v-if="isOpen" @close="closeMenu" />
</template>

<style scoped>
.menu {
  display: none;
}
@media (max-width: 480px) {
  .header-link {
    display: none;
  }
  .menu {
    display: block;
  }
}
</style>
