<template>
  <div class="numebr-text" ref="numberRef" id="numberRef">
    {{ number }}
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  delay: {
    type: Number,
    default: 3000, // ms
  },
})

const number = ref(props.value)
const numberRef = ref(null)

const animation = (newNumber: number, oldNumber: number) =>{
  const step = calcStep(newNumber, oldNumber)
  const timer = setInterval(() =>{
    number.value += step
    if(number.value >= newNumber){
      clearInterval(timer)
    }
  }, props.delay / 100)
}

const calcStep = (a: number, b: number) =>{
  // 根据数字差的大小计算合适的 step 值
  const diff = Math.abs(a - b);
  if (diff < 200) {
    return Math.floor(Math.random() * 10);
  } else if (diff < 1000) {
    return Math.floor(Math.random() * 100);
  } else {
    return Math.ceil(diff / props.delay * 10);
  }
}

watch(() => props.value, (newNumber, oldNumber) =>{
  animation(newNumber, oldNumber)
})
</script>

<style lang="scss" scoped>
.numebr-text {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #A0814F 31%, #FDE3C1 52%, #FEE3C3 53%, #F1D5B8 63%, #83642A 79%, #8F6822 91%);
  -webkit-background-clip: text;
  background-clip: text; 
  color: transparent; 
  transform: translateZ(0);
}
</style>
