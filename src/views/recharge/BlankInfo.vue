<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 16:39:07
 * @LastEditTime: 2020-10-15 18:22:02
 * @LastEditors: ranli
-->
<template>
  <div class="BlankInfo">
    <div v-if="!submitSuss" class="submit-info">
      <p class="UPI-title">UPI transfer payment</p>
      <p class="OrderNo"><span>Order No:</span>H-SYS-1601914758968134867</p>
      <div v-for="(value, key) in infoList" :key="key" class="input-box-list">
        <div class="input-box-title">{{ value.title }}{{ value.desc }}</div>
        <div class="input-box FLEXROW" :class="key == 'amount' ? 'amount' : ''">
          <span v-if="key == 'amount'">Rs</span>
          <input
            :placeholder="
              `${value.title}  Max length ${value.maxlength} Character `
            "
            :ref="key"
            :maxlength="value.maxlength"
            v-model="info[key]"
            class="normal-input"
            :name="key"
            type="text"
          />
        </div>
      </div>
      <p class="hit-text">
        Please carefully enter your payment upiaccount number and phone number
        to ensurethat we can quickly recharge your account.
      </p>
      <div @click="submitInfo" class="submit-button">Proceed payment</div>
    </div>
    <div v-else class="succInfo">
      <p class="p1">
        Please transfer the specified amount to the upi account provided below
      </p>
      <p class="p2">
        Please make sure your information is correct, wewill automatically
        recharge your account
      </p>
      <div class="succ-Info-data">
        <div v-for="(value, key) in info" :key="key">
          <div v-if="infoList[key].show">
            <div class="data-list">
              <span>{{ key }}：</span>
              <span>{{ value }}</span>
            </div>
          </div>
        </div>
        <div class="data-list">
          <span>UPI：</span>
          <span>Ayudhi1@yesbank</span>
          <span data-clipboard-text="Ayudhi1@yesbank" @click="Copy" class="Copy"
            >Copy</span
          >
        </div>
        <div class="data-list">
          <span>Amount：</span>
          <span>100.00</span>
          <span :data-clipboard-text="100.0" @click="Copy" class="Copy"
            >Copy</span
          >
        </div>
      </div>
      <p class="p3">
        Please pay the specified amount withinthe validity period.
      </p>
      <p class="p3">
        Do not repeat payment!!!
      </p>
      <div id="product-sec-countdown">
        <span v-if="timeObj.hour && timeObj.hour !== '0'">
          {{ timeObj.hour }}:</span
        >
        <span v-if="timeObj.minute && timeObj.minute !== '0'">
          {{ timeObj.minute }} <span>m</span>
        </span>
        <span v-if="timeObj.second && timeObj.second !== '0'">
          {{ timeObj.second }} <span>s</span></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Clipboard from "clipboard";
let timer;
@Component({
  methods: {
    submitInfo() {
      let done = true;
      for (const key in (this as any).info) {
        const element = (this as any).info[key];
        if (!element) {
          done = false;
          this.$refs[key][0].focus();
          break;
        }
      }
      if (done) {
        (this as any).submitSuss = true;
        (this as any).countdown(1200);
      }
    },
    Copy() {
      const clipboard = new Clipboard(".Copy");
      clipboard.on("success", (e) => {
        (this as any).$message.closeAll();
        (this as any).$message.success(" Copy Success !");
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        // 释放内存
        clipboard.destroy();
      });
    },
  },
})
export default class BlankInfo extends Vue {
  @Provide() private info = {
    Name: "",
    Email: "",
    UPI: "",
    MobileNo: "",
  };
  @Provide() private submitSuss = false;
  @Provide() private timeObj = {
    hour: "",
    minute: "",
    second: "",
  };
  @Provide() private infoList = {
    Name: {
      title: "Name",
      maxlength: 30,
      show: true,
    },
    Email: {
      title: "Email",
      maxlength: 20,
      show: false,
    },
    UPI: {
      title: "Your UPI",
      maxlength: 34,
      show: false,
    },
    MobileNo: {
      title: "Mobile No",
      maxlength: 15,
      show: true,
    },
  };
  countdown(sec) {
    let hour: number = 0;
    let minute: number = 0;
    let second: number = 0;
    timer = setInterval(() => {
      if (sec >= 60) {
        minute = Math.floor(sec / 60);
        second = sec % 60;
        if (minute >= 60) {
          hour = Math.floor(minute / 60);
          minute = minute % 60;
        } else {
          hour = 0;
        }
      } else {
        second = sec;
        hour = 0;
        minute = 0;
      }
      (this as any).timeObj.hour = (this as any).initNum(hour);
      (this as any).timeObj.minute = (this as any).initNum(minute);
      (this as any).timeObj.second = (this as any).initNum(second);
      sec--;
      if (sec < 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  initNum(num: number) {
    let result_num: string = "";
    result_num = num < 10 && num > 0 ? "0" + String(num) : String(num);
    return result_num;
  }

  destroyed() {
    clearInterval(timer);
  }
}
</script>

<style lang="scss">
.BlankInfo {
  .submit-info {
    .UPI-title {
      color: $primaryColor;
      font-size: 0.45rem;
      font-weight: 600;
      text-align: center;
    }
    .OrderNo {
      color: #666;
      padding-top: 0.2rem;
      font-weight: 600;
      text-align: center;
      span {
        color: #333;
      }
    }
    .hit-text {
      color: #e6a23c;
      padding: 0.3rem 0.2rem;
      font-size: 0.25rem;
      font-weight: 600;
    }
  }
  .succInfo {
    padding: 0.5rem 0.2rem;
    background: white;
    .succ-Info-data {
      padding: 0.25rem;
      .data-list {
        padding: 0.25rem 0;
        border-bottom: 1px solid gainsboro;
        padding-right: 1.4rem;
        position: relative;
        @include _flexRow(flex-start, flex-start);
        span {
          padding-right: 0.1rem;
          font-weight: bolder;
        }
        .Copy {
          position: absolute;
          right: 0;
          display: inline-block;
          background-color: gainsboro;
          color: green;
          padding: 0 0.2rem;
          width: 1.2rem;
          text-align: center;
        }
      }
    }
    & > p {
      padding: 0.1rem 0.2rem;
      font-size: 0.25rem;
      font-weight: 600;
      &.p1 {
        color: #e6a23c;
      }
      &.p2 {
        color: #333;
      }
      &.p3 {
        color: red;
        text-align: center;
      }
    }
  }
  #product-sec-countdown {
    padding: 0.2rem;
    text-align: center;
    font-size: 0.45rem;
    color: #333;
    > span {
      padding-right: 0.3rem;
      font-weight: bolder;
      > span {
        font-size: 0.3rem;
      }
    }
  }
}
</style>
