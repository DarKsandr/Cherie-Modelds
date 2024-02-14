<script setup lang="ts"></script>

<template>
  <div>
    <TypographyHTag>Новые лица</TypographyHTag>
    <hr class="mt-10" />
    <div class="mt-10 flex">
      <img
        class="img-first mr-10"
        src="/assets/img/new-faces/8e4e8d163e2f7b60ab21e2f160057182.jpeg"
        alt="Photo"
      />
      <div class="flex flex-col justify-between block-second">
        <div>
          <div class="h1">Marianna Korzhimanova</div>
          <div class="mt-3 content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
          <div class="mt-3">
            <img src="/assets/svg/instagram.svg" alt="Instagram" />
          </div>
        </div>
        <img
          class="img-second"
          src="/assets/img/new-faces/931f16cd9c83de7195ae64229c6c689c.jpeg"
          alt="Photo"
        />
      </div>
      <div class="flex flex-col justify-between items-end block-third">
        <img
          class="img-third"
          src="/assets/img/new-faces/814db461dbae9b67eae3120022a6dbb0.jpeg"
          alt="Photo"
        />
        <div>
          <div class="circle">Профиль модели</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-first {
  width: 560px;
}
.h1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.04em;
  text-align: left;
  text-transform: uppercase;
}
.content {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0;
  text-align: left;
}
.img-second,
.img-third {
  width: 281px;
}
.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px #d1d1d1 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font */
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0;
  text-align: center;
}
.block-third {
  min-width: 281px;
}
</style>
