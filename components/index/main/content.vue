<script setup lang="ts"></script>

<template>
  <div class="content">
    <div class="relative">
      <div class="text">MODEL</div>
      <div class="flex items-end">
        <div class="mb-4 year">2011 — 22.</div>
        <div class="text text-left">PUBLIC.</div>
      </div>
    </div>
    <div class="circle">Стать моделью</div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.text {
  font-size: 140px;
  font-weight: 400;
  line-height: 139px;
  letter-spacing: -0.04em;
  text-align: left;
}
.text-left {
  margin-left: 8rem;
}
.year {
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
}
.circle {
  width: 139px;
  height: 139px;
  border: 1px white solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0;
  text-align: center;
}
@media (max-width: 480px) {
  .text {
    font-size: 61px;
    line-height: 61px;
    letter-spacing: -0.04em;
  }
  .text-left {
    margin-left: 5rem;
  }
  .year {
    position: absolute;
    top: -20px;
    font-size: 12px;
    line-height: 12px;
  }
  .content {
    flex-direction: column;
    gap: 60px;
  }
}
</style>
