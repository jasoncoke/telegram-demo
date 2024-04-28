 <template>
  <section class="menu-wrapper">
    <div>
      <div class="menu-item bg-1">
        <i class="iconfont icon-tip"></i>
        <span>About</span>
      </div>
      <div class="menu-item bg-3">
        <i class="iconfont icon-cpu"></i>
        <span>Earn</span>
      </div>
    </div>

    <div class="mine-btn">
      <span class="mine-btn-text">Mine</span>
    </div>

    <div>
      <div class="menu-item bg-2">
        <i class="iconfont icon-frends"></i>
        <span>Frends</span>
      </div>
      <div class="menu-item bg-4">
        <i class="iconfont icon-rocket"></i>
        <span>Boost</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.menu-wrapper {
  width: 100%;
  display: flex;
  padding: 0 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  & > * {
    flex: 2;
  }
}
.menu-item {
  height: 60px;
  color: #FFD49C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  & + .menu-item {
    margin-top: .625rem;
  }
  &.bg-1 {
    background: url('@/assets/menu-item-1.png') no-repeat;
  }
  &.bg-2 {
    background: url('@/assets/menu-item-2.png') no-repeat;
  }
  &.bg-3 {
    background: url('@/assets/menu-item-3.png') no-repeat;
  }
  &.bg-4 {
    background: url('@/assets/menu-item-4.png') no-repeat;
  }
}
.mine-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -0.625rem;
    width: 166px;
    height: 166px;
    background: url('@/assets/button-platform.png') no-repeat center;
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: .25rem;
    left: -2rem;
    width: 129px;
    height: 129px;
    background: url('@/assets/button-bg.png') no-repeat;
    z-index: 1;
  }
  & .mine-btn-text {
    z-index: 2;
    font-size: 1.625rem;
    background: linear-gradient(118.81126791266382deg, #5B320C 0%, #2C1206 100%);
    -webkit-background-clip: text;
    background-clip: text; 
    color: transparent; 
  }
}
</style>
