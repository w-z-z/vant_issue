<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-11-03 10:38:29
 * @LastEditTime: 2020-11-17 18:47:58
 * @LastEditors: ranli
-->
<template>
  <div>
    <div class="nav-link">
      <div>
        <router-link to="/recharge">Recharge Demo</router-link>
      </div>
      <div>
        <router-link to="/withdraw">Withdraw Demo</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable*/
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Withdraw extends Vue {}
</script>
<style lang="scss">
.nav-link {
  height: 100vh;
  background-color: white;
  @include _flexColumn();
  & > div {
    width: 50%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border: 0.01rem solid $primaryColor;
    color: white;
    background-color: $primaryColor;
    margin: 0.4rem 0;
    border-radius: 5px;
    box-shadow: rgb(184, 184, 184) 5px 5px 5px;
    > a {
      font-size: 0.35rem;
      line-height: initial;
    }
    &:active {
      opacity: 0.89;
    }
  }
}
</style>
