<template>
  <div class="boost-item">
    <div class="boost-cpu">{{ props.cpu }}</div>
    <div class="payment-btn">{{ props.price }} TON</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cpu: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="scss" scoped>
.boost-item {
  background: linear-gradient(270deg, #312B21 0%, #312D26 100%);
  border-radius: .75rem;
  border: 1px solid #745935;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .boost-cpu {
    color: #F8F8F8;
    font-size: 1.125rem;
    font-weight: 500;
  }

  .payment-btn {
    max-width: 5.5rem;
    padding: .5rem 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFD49C;
    border-radius: 1.5rem;
    font-weight: 600;
    color: #543C10;
  }
}
</style>