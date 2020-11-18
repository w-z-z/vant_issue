<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-11-17 18:53:58
 * @LastEditors: ranli
-->
<template>
  <div class="recharge">
    <div class="submit-info">
      <div class="steps-show FLEXROW">
        <div class="steps-list">
          <div class="STEP_img">
            <img :src="require('../../assets/STEP1_img.png')" alt="STEP1_img" />
          </div>
          <div class="STEP_text">
            <img :src="require('../../assets/STEP1.png')" alt="STEP1" />
          </div>
          <div class="steps-text">
            <p>Select the</p>
            <p>recharge amount</p>
          </div>
        </div>
        <div class="steps-arr">
          <img :src="require('../../assets/arr.png')" alt="arr" />
        </div>
        <div class="steps-list">
          <div class="STEP_img">
            <img :src="require('../../assets/STEP2_img.png')" alt="STEP2_img" />
          </div>
          <div class="STEP_text">
            <img :src="require('../../assets/STEP2.png')" alt="STEP2" />
          </div>
          <div class="steps-text">
            <p>Transfer to us</p>
            <p>via UPI</p>
          </div>
        </div>
        <div class="steps-arr">
          <img :src="require('../../assets/arr.png')" alt="arr" />
        </div>
        <div class="steps-list">
          <div class="STEP_img">
            <img :src="require('../../assets/STEP3_img.png')" alt="STEP3_img" />
          </div>
          <div class="STEP_text">
            <img :src="require('../../assets/STEP3.png')" alt="STEP3" />
          </div>
          <div class="steps-text">
            <p>Enter the Ref No.</p>
            <p>of your transfer</p>
          </div>
        </div>
      </div>
      <div class="title-step">
        <p class="title-main">Step1:Recharge Amount</p>
        <p class="title-desc">
          Please Select the amount you want to recharge
        </p>
      </div>
      <div class="recharge-content  ">
        <!-- <div class="input-number">
          <div class="input-box-list">
            <div class="input-box FLEXROW amount">
              <span>Rs:</span>
              <div ref="amount" class="normal-input">
                {{ userinfo.amount }}
              </div>
            </div>
          </div>
        </div> -->
        <!-- <p class="Choose"><span> Amount</span></p> -->
        <div class="choose-number">
          <div
            @click="
              activeNumber = item;
              userinfo.amount = item;
            "
            :class="{ active: activeNumber === item }"
            :key="item"
            v-for="item in amountNumber"
          >
            {{ item }}
          </div>
        </div>
        <p class="title-desc" style="color:red">
          You must transfer according to the amount you choose. If the transfer
          amount is inconsistent with the amount you choose, you will not be
          able to recharge successfully
        </p>
      </div>
      <div class="title-step">
        <p class="title-main">Step2:UPI Information</p>
        <p class="title-desc">
          Transfer the amount you want to recharge to us by UPI transfer.
        </p>
      </div>
      <div class="userinfo-box">
        <div class="userinfo">
          <div>
            <div class="userinfo-list FLEXROW">
              <div>
                <span>UPI：</span>
                <span id="UPI">{{ userinfo.UPI }}</span>
              </div>
              <div
                data-clipboard-action="copy"
                ref="copyBtn4"
                data-clipboard-target="#UPI"
                class="copy-label copyBtn4"
              >
                COPY
              </div>
            </div>
          </div>
        </div>
        <p class="info-desc">
          Please record your reference No.(Ref No.) after payment
        </p>
      </div>
      <div class="title-step">
        <p class="title-main STEP2">Step3:Ref No/Reference No/UTR</p>
        <p class="title-desc">
          <svg
            t="1602482250446"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4287"
            width="14"
            height="14"
          >
            <path
              d="M872.329623 147.671158C776.348369 52.389768 649.773091 0.09998 515.399336 0.09998H511.90002c-138.472955 0.999805-267.647725 54.589338-363.82894 150.970514C51.889865 247.351689-0.599883 375.626635 0.09998 512.199961c1.599688 282.144894 231.254833 511.800039 511.90002 511.800039 282.244874 0 511.90002-229.655145 511.90002-511.90002 0-137.873072-53.889475-267.347784-151.570397-364.428822z m-360.329623 661.870728c-28.294474 0-51.190002-22.895528-51.190002-51.190002 0-28.294474 22.895528-51.190002 51.190002-51.190002 28.294474 0 51.190002 22.895528 51.190002 51.190002 0 28.194493-22.895528 51.190002-51.190002 51.190002z m40.991994-181.664518c0 22.595587-18.296426 40.991994-40.991994 40.991993-22.595587 0-40.991994-18.296426-40.991994-40.991993l-40.991994-331.435267c0-45.191174 36.692833-81.884007 81.884008-81.884007s81.884007 36.692833 81.884007 81.884007L552.991994 627.877368z"
              fill="#ff0000"
              p-id="4288"
            ></path>
          </svg>
          Please enter the REF No./Reference No./UTR of your transfer and we
          will finish your recharge as soon as possible.
        </p>
      </div>
      <div class="input-box FLEXROW">
        <input
          ref="transactionNo"
          maxlength="20"
          v-on:input="
            userinfo.transactionNo = userinfo.transactionNo.replace(
              /[^\da-zA-Z]/g,
              ''
            )
          "
          v-model="userinfo.transactionNo"
          class="normal-input"
          name="refNo"
          type="text"
        />
      </div>

      <div @click="submitInfo" class="submit-button">Submit Ref No</div>
    </div>
    <confirmDialog v-model="visible2" :params="dialogParams2">
      <div class="confirm-Result">
        <p class="result-text" style="text-align: center;">
          Your representation has been applied
        </p>
      </div>
    </confirmDialog>
    <confirmDialog v-model="visible" :params="dialogParams" @confirm="confirm">
      <div class="confirm-userinfo">
        <div
          v-for="(value, key) in userinfo"
          :key="key"
          class="confirm-userinfo-list"
        >
          <span>{{ infoListTitle[key] }}</span>
          <span>{{ value }}</span>
        </div>
      </div>
    </confirmDialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import clipboard from "clipboard";
import confirmDialog from "@/components/dialog.vue";
declare function require(img: string): string; // 声明
@Component({
  components: { confirmDialog },
  methods: {
    confirm() {
      (this as any).visible2 = true;
    },
    submitInfo() {
      let _this = this as any;
      let { amount, transactionNo } = _this.userinfo;
      if (!transactionNo) {
        _this.$refs["transactionNo"].focus();
        return false;
      }
      _this.visible = true;
    },
  },
})
export default class Dialog extends Vue {
  @Provide() private amountNumber = [100, 200, 300, 500, 1000, 1500];
  @Provide() private activeNumber = 100;
  @Provide() private amount = "100";
  @Provide() private visible = false;
  @Provide() private visible2 = false;
  @Provide() private infoListTitle = {
    UPI: "UPI：",
    // name: "Name：",
    amount: "Recharge Amount：",
    // accountNumber: "Account Number：",
    // IFSC: "IFSC：",
    transactionNo: "Ref No：",
  };
  @Provide() private dialogParams = {
    title: "Please Comfirm The Information",
    cancel: {
      show: true,
      text: "Cancel",
    },
    confirm: {
      show: true,
      text: "Confirm",
    },
  };
  @Provide() private dialogParams2 = {
    title: "",
    cancel: false,
    confirm: {
      show: true,
      text: "ok",
    },
  };
  @Provide() private ConfirmData = {};
  @Provide() private userinfo = {
    UPI: "***********@icici",
    // name: "ANSEN TECHNOLOGY",
    amount: "100",
    // accountNumber: "234005001298",
    // IFSC: "ICIC0002340",
    transactionNo: "",
  };
  created() {
    let timer;
    let _this = this as any;
    _this.$nextTick(() => {
      let clipboard4 = new clipboard(".copyBtn4");
      clipboard4.on("success", (e) => {
        if (!timer) {
          let element = document.createElement("span");
          element.setAttribute("class", "copy-hint");
          element.appendChild(document.createTextNode("Copied"));
          _this.$refs["copyBtn4"].appendChild(element);
          timer = setTimeout(() => {
            _this.$refs["copyBtn4"].removeChild(element);
            timer = undefined;
          }, 1500);
        }
      });
    });
  }
}
</script>
<style lang="scss">
.recharge {
  min-height: calc(100vh - 1rem);
  .recharge-content {
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
