<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-10-15 18:19:40
 * @LastEditors: ranli
-->
<template>
  <div class="recharge">
    <div class="recharge-way"></div>
    <div class="recharge-content submit-info">
      <div class="input-number">
        <div class="input-box-list">
          <!-- <div class="input-box-title">Amount</div> -->
          <div class="input-box FLEXROW amount">
            <span>Rs</span>
            <div ref="amount" class="normal-input">
              {{ amount }}
            </div>
          </div>
        </div>
      </div>
      <p class="Choose"><span> Amount</span></p>
      <div class="choose-number">
        <div
          @click="
            activeNumber = item;
            amount = item;
          "
          :class="{ active: activeNumber === item }"
          :key="item"
          v-for="item in amountNumber"
        >
          {{ item }}
        </div>
      </div>
      <div class="hint-text">
        Cooperative merchants please note that the recharge level can be 6-12 or
        more, but the
        <span style="color:red">
          recharge amount must be an integer multiple of 10.</span
        >
      </div>
      <br />
      <br />
      <div @click="Recharge" class="submit-button">Recharge</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
@Component({
  methods: {
    Recharge() {
      this.$router.push("BlankInfo");
    },
  },
})
export default class Dialog extends Vue {
  @Provide() private amountNumber = [100, 200, 300, 500, 1000, 1500];
  @Provide() private activeNumber = 100;
  @Provide() private amount = "100";
}
</script>
<style lang="scss">
.recharge {
  min-height: calc(100vh - 1rem);
  .recharge-way {
    background-image: url("./../../assets/bg.jpg");
    background-size: 100% 100%;
    height: 2rem;
    background-repeat: no-repeat;
  }
  .recharge-content {
    margin: -1rem auto 0 auto;
  }
  .Choose {
    font-size: 0.25rem;
    color: #333;
    font-weight: bolder;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0.2rem 0;
    padding-left: 0.15rem;
    span {
      vertical-align: middle;
    }
    border-left: 0.1rem solid rgba($color: $primaryColor, $alpha: 0.8);
  }
  .hint-text {
    color: #666;
    font-size: 0.25rem;
  }
  .choose-number {
    @include _flexRow(space-around);
    flex-wrap: wrap;
    padding: 0.2rem 0;
    & > div {
      width: 30%;
      text-align: center;
      background-color: #f8f7ff;
      margin-bottom: 0.1rem;
      padding: 0.2rem 0;
      border-radius: 6px;
      &.active {
        background-color: rgba($color: $primaryColor, $alpha: 0.3);
        font-weight: 600;
      }
    }
  }
}
</style>
