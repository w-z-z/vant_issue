<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-10-15 13:35:32
 * @LastEditors: ranli
-->
<template>
  <div id="app">
    <div class="nav-link">
      <div :class="{ active: routerTitle == 'Recharge' }">
        <router-link to="/recharge">recharge</router-link>
      </div>
      <div :class="{ active: routerTitle == 'Withdraw' }">
        <router-link to="/withdraw">withdraw</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide, Emit, Prop } from "vue-property-decorator";
export default class App extends Vue {
  get routerTitle() {
    return this.$route.meta.title;
  }
}
</script>
<style lang="scss">
.nav-link {
  @include _flexRow();
  & > div {
    width: 50%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border: 0.01rem solid #674fe1;
    color: #674fe1;
    background-color: white;
    > a {
      font-size: 0.35rem;
    }
    &.active {
      background-color: #674fe1;
      color: white;
      font-weight: bolder;
    }
  }
}
</style>
