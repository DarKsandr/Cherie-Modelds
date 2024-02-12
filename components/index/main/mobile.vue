<script setup lang="ts">
defineEmits(['close']);
</script>

<template>
  <div
    class="bg-white w-screen h-screen absolute top-0 left-0 p-5 text-black z-10 flex flex-col justify-between"
  >
    <div>
      <div class="flex justify-between">
        <IndexLogo color="black" />
        <img
          src="/assets/svg/close.svg"
          alt="Close"
          aria-hidden="true"
          @click="$emit('close')"
        />
      </div>
      <hr class="mt-3" />
    </div>
    <div class="flex-1 flex flex-col justify-around">
      <IndexLinkFallen />
      <IndexLinkCommon class="flex flex-col gap-10" />
      <IndexLinkRegion />
    </div>
    <div>
      <hr class="mb-3" />
      <IndexSocialNetwork class="flex justify-between" />
    </div>
  </div>
</template>

<style scoped></style>
