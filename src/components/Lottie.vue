<template>
  <div class="lottie-container" ref="lottieContainer">

  </div>
</template>

<script setup lang="ts">
import lottie from "lottie-web"
import { onMounted, ref } from "vue"

const props = defineProps({
  data: {
    type: Object,
    default: null
  },
})

const lottieContainer = ref(null)

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value as unknown as Element,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    animationData: props.data
  })
})
</script>

<style lang="scss" scoped>

</style>