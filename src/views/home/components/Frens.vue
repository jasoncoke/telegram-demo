<template>
  <Popup
    v-model:show="props.show"
    position="bottom"
    round
    closeable
    :style="{ height: '300px' }"
    class="frens-popup"
    @close="emits('close')"
  >
    <Image class="user-avatar" round fit="cover" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />

    <div class="frens-content">
      <div class="frens-title">邀请2/10个朋友，可获得 500K 算力</div>
      <section class="frens-invite">
        <div v-for="i in inviteCount" :key="i" class="frens-invite-img">
          <Image v-if="inviteList[i - 1]?.avatar" fit="cover" :src="inviteList[i - 1]?.avatar" />
          <div v-else class="frens-invite-empty">+</div>
        </div>
      </section>
      <div class="invite-btn">
        <span>Invite Friends</span>
        <span> > </span>
      </div>
    </div>
  </Popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popup, Image } from 'vant'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits(['close'])

const inviteCount = 10 // 邀请人数
const inviteList = ref([
  {avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'},
  {avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'},
])

</script>

<style scoped>
.frens-popup {
  background: linear-gradient( 180deg, #3B2F1D 0%, #1A1815 100%);
  box-shadow: inset 0px 10px 30px 0px rgba(253,216,169,0.15);
  overflow-y: visible;

  .user-avatar {
    width: 4.5rem;
    height: 4.5rem;
    position: absolute;
    right: 50%;
    transform: translate(50%, -50%);
    border: 2px solid;
    border-image: linear-gradient(180deg, rgba(253, 216, 169, 1), rgba(253, 216, 169, 0.5)) 2 2;
  }

  .frens-content {
    margin-top: 3.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .frens-title {
      text-align: center;
      font-size: 1rem;
      color: #FFD49C;
    }

    .frens-invite {
      margin-top: 1rem;
      padding: 0 1.6rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .frens-invite-img {
        width: 3.6rem;
        height: 3.6rem;
        margin-top: .5rem;
        background: #312B21;
        border-radius: 1rem;
        padding: 2px;
      }
      .frens-invite-empty {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient( 180deg, #3B2F1D 0%, #1A1815 100%);
        color: #FFD49C;
        font-size: 1.5rem;
        border-radius: 1rem;
        border: 2px dashed #745935;
      }
    }

    .invite-btn {
      width: 20rem;
      height: 3rem;
      margin-top: 1rem;
      background: linear-gradient( 180deg, #FDD8A9 0%, #FFC072 100%);
      box-shadow: 0px 4px 0px 0px #67480C;
      border-radius: 100px 100px 100px 100px;
      color: #2C1206;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      & > span {
        margin-left: .5rem;
      }
    }
  }
}

:deep(.frens-invite-img > .van-image) {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
}
</style>  
