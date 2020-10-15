<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-10-15 14:48:24
 * @LastEditors: ranli
-->

<template>
  <div class="withdraw">
    <div class="submit-info">
      <div v-for="(value, key) in infoList" :key="key" class="input-box-list">
        <div class="input-box-title">{{ value.title }}{{ value.desc }}</div>
        <div class="input-box FLEXROW" :class="key == 'amount' ? 'amount' : ''">
          <span v-if="key == 'amount'">Rs</span>
          <input
            :placeholder="`up to ${value.maxlength}  fields`"
            :ref="key"
            :maxlength="value.maxlength"
            v-model="info[key]"
            class="normal-input"
            :name="key"
            @input="value.input"
            type="text"
          />
        </div>
      </div>
      <div @click="submitInfo" class="submit-button">Submit</div>
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
          v-for="(value, key) in info"
          :key="key"
          class="confirm-userinfo-list"
        >
          <span>{{ infoList[key].title }}：</span>
          <span>{{ value }}</span>
        </div>
      </div>
    </confirmDialog>
  </div>
</template>

<script lang="ts">
/* eslint-disable*/
import { Component, Vue, Provide, Emit, Prop } from "vue-property-decorator";
import confirmDialog from "@/components/dialog.vue";
@Component({
  components: { confirmDialog },
  methods: {
    confirm() {
      (this as any).visible2 = true;
    },
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
        for (const key in (this as any).info) {
          if (Object.prototype.hasOwnProperty.call((this as any).info, key)) {
            const element = (this as any).info[key];
            (this as any).ConfirmData[key] = {
              value: element,
              title: (this as any).infoList[key].title,
            };
          }
        }
        (this as any).visible = true;
      }
    },
  },
})
export default class Withdraw extends Vue {
  @Provide() private info = {
    amount: "",
    beneficaryName: "",
    beneficaryAccount: "",
    IFSC: "",
    contact: "",
  };
  @Provide() private infoList = {
    amount: {
      title: "Amount",
      maxlength: 10,
      input: () => {
        this.info.amount = this.info.amount.replace(/[^\d]/g, "");
      },
    },
    beneficaryName: {
      title: "Beneficary Name",
      maxlength: 30,
      input: () => {
        // console.log("22");
      },
    },
    beneficaryAccount: {
      title: "Beneficary Account",
      maxlength: 30,
      input: () => {
        // console.log("22");
      },
    },
    IFSC: {
      title: "IFSC-Code",
      maxlength: 20,
      input: () => {
        // console.log("22");
      },
    },
    contact: {
      title: "Contact Information ",
      maxlength: 20,
      desc: "(mobile phone or email)",
      input: () => {
        // console.log("22");
      },
    },
  };
  @Provide() private visible = false;
  @Provide() private visible2 = false;
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
}
</script>
<style lang="scss"></style>
