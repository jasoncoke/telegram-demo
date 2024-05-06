<template>
  <Popup
    v-model:show="props.show"
    position="bottom"
    round
    closeable
    :style="{ height: '80%' }"
    class="earn-popup"
    @close="emits('close')"
  >
    <div class="popup-header">Earn</div>
    <section class="earn-content">
      <div class="earn-content_item">
        <p>Invite:</p>
        <EarnItem icon="icon-earn-friends" title="Invite friends to get" :reward="100" />
      </div>

      <div class="earn-content_item">
        <p>Explore:</p>
        <EarnItem icon="icon-earn-channel" title="Join channel" :reward="10000" />
        <EarnItem icon="icon-earn-x" title=" Follow us on X" :reward="20000" />
        <EarnItem icon="icon-earn-group" title="Join group" :reward="10000" />
      </div>
    </section>
  </Popup>
</template>

<script setup lang="ts">
import { Popup } from 'vant'
import EarnItem from './EarnItem.vue'
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})
const emits = defineEmits(['close'])
</script>

<style lang="scss" scoped>
.earn-popup {
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

  .earn-content {
    height: calc(100% - 60px);
    background: #1A1815;
    padding: 0 calc(calc(100% - 345px) / 2);
    .earn-content_item {
      & + .earn-content_item {
        margin-top: 1.25rem;
      }
      & > p {
      font-size: 1rem;
      margin-bottom: .625rem;
      font-weight: 500;
      }
    } 
  }
}

:deep(.earn-item + .earn-item) {
  margin-top: .75rem;
}
</style>
