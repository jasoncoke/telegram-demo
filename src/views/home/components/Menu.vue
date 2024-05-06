 <template>
  <section class="menu-wrapper">
    <div>
      <div class="menu-item menu-item_left">
        <img src="@/assets/menu-item-1.png" alt="">
        <div class="menu-item_label">
          <i class="iconfont icon-tip"></i>
          <span>About</span>
        </div>
      </div>
      <div class="menu-item menu-item_left">
        <img src="@/assets/menu-item-3.png" alt="">
        <div class="menu-item_label" @click="showEarnModel = true">
          <i class="iconfont icon-cpu"></i>
          <span>Earn</span>
        </div>
      </div>
    </div>

    <div class="mine-btn" @click="emits('start')">
      <img src="@/assets/mine-btn-bg_active.png" alt="">
      <span>Mine</span>
    </div>

    <div class="menu-item-wrapper">
      <div class="menu-item menu-item_right">
        <img src="@/assets/menu-item-2.png" alt="">
        <div class="menu-item_label" @click="showFrensModel = true">
          <i class="iconfont icon-frens"></i>
          <span>Frens</span>
        </div>
      </div>
      <div class="menu-item menu-item_right">
        <img src="@/assets/menu-item-4.png" alt="">
        <div class="menu-item_label" @click="showBoostModel = true">
          <i class="iconfont icon-rocket"></i>
          <span>Boost</span>
        </div>
      </div>
    </div>

    <Frens v-model:show="showFrensModel" @close="showFrensModel = false"/>

    <Earn v-model:show="showEarnModel" @close="showEarnModel = false" />

    <Boost v-model:show="showBoostModel" @close="showBoostModel = false" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Frens from './Frens.vue'
import Earn from './Earn.vue'
import Boost from './Boost.vue'

const emits = defineEmits(['start'])

const showFrensModel = ref(false)
const showEarnModel = ref(false)
const showBoostModel = ref(false)
</script> 

<style lang="scss" scoped>
.menu-wrapper {
  width: 100%;
  display: flex;
  padding: 0 1rem;
  box-sizing: border-box;
  & > * {
    flex: 2;
  }
}

.menu-item-wrapper {
  z-index: 5;
}

.menu-item {
  width: 100%;
  min-height: 3.75rem;
  color: #FFD49C;
  position: relative;
  z-index: 5;
  & + .menu-item {
    margin-top: .625rem;
  }
  & img {
    width: 100%;
  }
  & .menu-item_label {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
  }
  &.menu-item_left .menu-item_label {
    left: 25%;
  }
  &.menu-item_right .menu-item_label {
    right: 25%;
  }
}

.mine-btn {
  flex: 1.25;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 6;
  & img {
    position: absolute;
    height: 100%;
    object-fit: cover;
  }
  & > span {
    z-index: 7;
    font-size: 1.625rem;
    background: linear-gradient(118.81126791266382deg, #5B320C 0%, #2C1206 100%);
    -webkit-background-clip: text;
    background-clip: text; 
    color: transparent; 
  }
}
</style>
