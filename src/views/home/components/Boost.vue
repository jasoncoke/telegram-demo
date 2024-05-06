<template>
    <Popup
    v-model:show="props.show"
    position="bottom"
    round
    closeable
    :style="{ height: '80%' }"
    class="boost-popup"
    @close="emits('close')"
  >
    <div class="popup-header">Boost</div>
    <section class="boost-content">
      <p>Pay</p>
      <BoostItem cpu="100K" :price="0.1"/>
      <BoostItem cpu="200K" :price="0.2"/>
      <BoostItem cpu="500K" :price="0.5"/>
      <BoostItem cpu="1000K" :price="1.0"/>
    </section>
  </Popup>
</template>

<script setup lang="ts">
import { Popup } from 'vant'
import BoostItem from './BoostItem.vue'
const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  }
})
const emits = defineEmits(['close'])
</script>

<style lang="scss" scoped>
.boost-popup {
  background: transparent;
  .popup-header {
    width: 100%;
    height: 60px;
    background: url('@/assets/earn-header.png') no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 1.25rem;
  }
  .boost-content {
    height: calc(100% - 60px);
    background: #1A1815;
    padding: 1rem 1rem 0;
    box-sizing: border-box;
    & > p {
      font-size: 1rem;
      margin-bottom: .75rem;
    }
  }
}

:deep(.boost-item + .boost-item) {
  margin-top: .75rem;
}
</style>