<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 14:15:36
 * @LastEditTime: 2020-10-15 14:44:28
 * @LastEditors: ranli
-->
<template>
  <!-- 子组件 -->
  <div
    @click.stop="() => {}"
    :class="['dialog ', 'FLEXROW', visible ? 'flex' : 'none']"
  >
    <div class="dialog-body">
      <div v-if="params.title" class="dialog-header">{{ params.title }}</div>
      <div class="dialog-content">
        <slot></slot>
      </div>
      <div class="dialog-footer FLEXROW">
        <div
          v-if="params.cancel"
          @click="$emit('ChangeDialog', false)"
          class="dialog-cancel dialog-button"
        >
          {{ params.cancel.text }}
        </div>
        <div
          v-if="params.confirm"
          @click="
            $emit('ChangeDialog', false);
            $emit('confirm');
          "
          class="dialog-comfirm dialog-button"
        >
          {{ params.confirm.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Model } from "vue-property-decorator";
@Component({})
export default class Dialog extends Vue {
  @Model("ChangeDialog", { type: Boolean })
  private visible!: boolean;
  @Prop() private params!: object;
}
</script>
