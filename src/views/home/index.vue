<template>
  <div class="app-container">
    <!-- Ranking list -->
    <section class="rank-wrapper">
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

    <!-- menu -->
    <Menu />
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Number from '@/components/Number.vue'
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
</style>
