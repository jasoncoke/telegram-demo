<template>
    <Popup
    v-model:show="props.show"
    position="bottom"
    round
    closeable
    :style="{ height: '80%' }"
    class="rank-popup"
    @close="emits('close')"
  >
    <section class="honor-board">
      <div class="honor-item" v-for="item in honorList" :key="item.noun">
        <div class="honor-item-bg" :class="`honor-item-bg_${item.noun}`">
          <Image
            fit="cover"
            round
            class="honor-item-avatar"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div class="honor-item-desc">
          <div class="honor-item-desc_name">Louise Martin</div>
          <div class="honor-item-desc_eob">EOB</div>
          <div class="honor-item-desc_count">24141</div>
        </div>
      </div>
    </section>

    <section class="display-board">
      <div class="display-item">
        <div class="display-item_noun">4</div>
        <div class="display-item_desc">
          <Image
            fit="cover"
            round
            class="display-item_avatar"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <div class="display-item_name">David Torres</div>
          <div class="display-item_asset">
            <span class="display-item_asset_number">25151</span>
            <span class="display-item_asset_unit">EOB</span>
          </div>
        </div>
      </div>
    </section>
  </Popup>
</template>

<script setup lang="ts">
import { Popup, Image } from 'vant'
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})
const emits = defineEmits(['close'])
const honorList = [
  {
    noun:2,
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    noun:1,
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    noun:3,
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
]
</script>

<style lang="scss" scoped>
.rank-popup {
  background: linear-gradient( 180deg, #020204 0%, #1B1206 100%);
  padding: 2rem 1rem;
  box-sizing: border-box;
}
.honor-board {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  .honor-item {
    width: calc(calc(100% - 2rem) / 3);
    position: relative;
    &:nth-child(2n+1) {
      margin-top: 2rem;
    }
  }
  .honor-item-bg {
    width: 105px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    background-size: cover;
  }
  .honor-item-avatar {
    padding: .1875rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .honor-item-bg_1 {
    height: 90px;
    background: url('@/assets/rank-1.png') no-repeat center; 
    .honor-item-avatar {
      width: 4rem;
      height: 4rem;
      top: 15px;
      background: #FFCD7E;
    }
  }
  .honor-item-bg_2 {
    height: 75px;
    background: url('@/assets/rank-2.png') no-repeat center; 
    .honor-item-avatar {
      width: 3.3rem;
      height: 3.3rem;
      top: 12px;
      background: #E6E7ED;
    }
  }
  .honor-item-bg_3 {
    height: 75px;
    background: url('@/assets/rank-3.png') no-repeat center; 
    .honor-item-avatar {
      width: 3.3rem;
      height: 3.3rem;
      top: 12px;
      background: #FE9C68;
    }
  }
  .honor-item-desc {
    padding-top: 3.125rem;
    background: linear-gradient(180deg, rgba(79,61,33,0.56) 5%, rgba(71,51,27,0.06) 100%);
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      margin-bottom: .5rem;
    }
    .honor-item-desc_name {
      font-size: .75rem;
      font-weight: 500;
    }
    .honor-item-desc_eob {
      font-size: .75rem;
      color: rgba(255, 255, 255, 0.75);
    }
    .honor-item-desc_count {
      font-size: 1rem;
      font-weight: 600;
      color: #FFD49C;
    }
  }
}

.display-board {
  margin-top: 1rem;
  .display-item {
    display: flex;
    align-items: center;
    padding: .625rem 0;
    .display-item_noun {
      font-weight: 500;
      color: #FFFFFF;
      margin-right: 1rem;
    }
    .display-item_desc {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -.625rem;
        width: 100%;
        border: 1px solid #FFFFFF;
        opacity: 0.08;
      }
    }
    .display-item_avatar {
      width: 2.5rem;
      height: 2.5rem;
    }
    .display-item_name {
      margin-left: .625rem;
    }
    .display-item_asset {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: auto;
      .display-item_asset_number {
        font-weight: 500;
      }
      .display-item_asset_unit {
        font-size: 12px;
        color: rgba(255,255,255,0.75);
        margin-top: 4px;
      }
    }
  }
}
</style>