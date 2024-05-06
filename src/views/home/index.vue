<template>
  <div class="app-container">
    <!-- Ranking list -->
    <section class="rank-wrapper" @click="showRankModel = true">
      <div class="rank-box">
        <i class="iconfont icon-rank"></i>
        <span class="rank-text">Rank</span>
        <i class="iconfont icon-arrow_right"></i>
      </div>
    </section>

    <!-- Logo -->
    <section class="logo-wrapper">
      <img src="@/assets/gold-mine.png" />
      <span class="logo-text">EOB</span>
    </section>

    <!-- 数字滚动 -->
    <Number />

    <section class="ore-wrapper">
      <div class="ore-img">
        <Lottie :data="oreJson" style="width: 150px;"/>
      </div>
      <img v-if="waiting" class="iron-img" src="@/assets/iron.gif" />
      <img v-else class="iron-img" src="@/assets/iron.png" />
    </section>
    <section class="gpu-wrapper">
      My GPU: 1000k 
    </section>

    <!-- menu -->
    <Menu @start="waiting = true"/>

    <Rank v-model:show="showRankModel" @close="showRankModel = false" />
  </div>
</template>

<script setup lang="ts">
import Lottie from '@/components/Lottie.vue'
import Number from '@/components/Number.vue'
import Menu from './components/Menu.vue'
import Rank from './components/Rank.vue'
import oreJson from '@/assets/json/ore.json'
import { ref } from 'vue'

const showRankModel = ref(false)
const waiting = ref(false) // 是否在等待
</script>

<style lang="scss" scoped>
.rank-wrapper {
  display: flex;
  justify-content: end;
  .rank-box {
    background: #211F1D;
    padding: .625rem .625rem .625rem 1rem;
    border-radius: 1.75rem 0 0 1.75rem;
    display: flex;
    align-items: center; 
    .rank-text {
      color: rgba(255, 255, 255, 0.8);
    }
    & > i {
      margin-right: 4px;
    }
  }
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 1rem;
    height: 1rem;
    margin-right: .25rem;
  }
  .logo-text {
    font-size: 1rem;
  }
}

.ore-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .ore-img {
    width: 9.375rem;
    background: url('@/assets/starlight.gif') no-repeat center;
    background-size: cover;
  }
  .iron-img {
    width: 8rem;
    position: absolute;
    top: -55%;
    left: 50%;
    transform: translate(10%, 50%);
    z-index: 10;
  }
}

.gpu-wrapper {
  max-width: 13.625rem;
  text-align: center;
  margin: 0 auto;
  padding: .5rem 4.375rem;
  background: linear-gradient( 180deg, #000000 0%, #040304 100%);
  border-radius: .375rem;
  border: 1px solid #241F1E;
  color: #D9C49F;
}
</style>
