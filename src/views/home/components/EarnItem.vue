<template>
  <div class="earn-item">
    <div class="icon-wrapper">
      <i :class="`iconfont ${props.icon}`"></i>
    </div>
    <div class="job-wrapper">
      <div class="job-title">{{ props.title }}</div>
      <div class="job-rewards">+ {{ formattNumber(props.reward) }}</div>
    </div>

    <i class="iconfont icon-arrow_right do-icon"></i>
  </div>
</template>

<script setup lang="ts">
import { formattNumber } from '@/utils/format'
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  reward: {
    type: Number,
    default: 0
  }
})

</script>

<style lang="scss" scoped>
.earn-item {
  width: 100%;
  height: 86px;
  padding: 0 1rem;
  box-sizing: border-box;
  background: url('@/assets/earn-item-bg.png') no-repeat center;
  display: flex;
  align-items: center;
  .icon-wrapper {
    width: 2.25rem;
    height: 2.25rem;
    background: #FDD8A9;
    border-radius: .75rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    & > i {
      font-size: 1.5rem;
    }
  }
  .job-wrapper {
    margin-left: .5rem;
    .job-rewards {
      margin-top: .2rem;
      color: #FFD49C;
    }
  }
  .do-icon {
    margin-left: auto;
  }
}
</style>
