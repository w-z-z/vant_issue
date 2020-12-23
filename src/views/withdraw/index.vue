<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-12-23 13:37:47
 * @LastEditors: ranli
-->

<template>
	<div class="withdraw">
		<div class="withdraw-models">
			<div
				@click="active = true"
				:class="{ active: active }"
			>Bank</div>
			<div
				@click="active = false"
				:class="{ active: !active }"
			>VPA</div>
		</div>
		<div class="submit-info">
			<van-form
				ref="vanform"
				@submit="onSubmit"
				@failed="onFailed"
				:validate-first='true'
				:show-error='false'
				:show-error-message='false'
			>
				<div
					v-for="(value, key) in infoList"
					:key="key"
					class="input-box-list"
				>
					<div v-if="value.show">
						<div class="input-box-title">{{ value.title }}{{ value.desc }}</div>
						<div
							class="input-box FLEXROW"
							:class="key == 'amount' ? 'amount' : ''"
						>
							<span v-if="key == 'amount'">Rs</span>
							<van-field
								:ref="key"
								:name="key"
								:type='value.type||"text"'
								v-model="info[key]"
								:placeholder="value.placeholder"
								:show-word-limit='value.showWordLimit||false'
								:maxlength="value.maxlength"
								:rules="value.rules"
							/>
						</div>
					</div>
				</div>
				<div class="submit-button-box">
					<button
						native-type="submit"
						class="submit-button"
					>Submit</button>
				</div>
			</van-form>

		</div>
		<van-dialog
			className="custom-dialog"
			v-model="visible"
			@confirm="confirm"
			@cancel='visible=true'
			show-cancel-button
			confirm-button-text='Comfirm'
			cancel-button-text='Cancel'
		>
			<div class="confirm-userinfo">
				<div
					v-for="(value, key) in info"
					:key="key"
				>
					<div
						v-if='infoList[key].show'
						class="confirm-userinfo-list"
					>
						<span>{{ infoList[key].title }}：</span>
						<span>{{ value }}</span>
					</div>
				</div>

			</div>
		</van-dialog>
	</div>
</template>

<script lang="ts">
	import {
		Component,
		Vue,
		Provide,
		Emit,
		Prop,
		Watch,
	} from 'vue-property-decorator';
	import { Dialog, Field, Form, Button, Toast } from 'vant';

	@Component({
		components: {
			[Dialog.Component.name]: Dialog.Component,
			[Field.name]: Field,
			[Form.name]: Form,
			[Button.name]: Button,
		},
		methods: {
			confirm() {
				let _this = this as any;
				Dialog.alert({
					message: 'submit successfully',
					confirmButtonColor: '#1970FA',
					className: 'custom-dialog',
					confirmButtonText: 'Ok',
				}).then(() => {
					_this.info = {
						amount: '',
						beneficaryName: '',
						beneficaryAccount: '',
						IFSC: '',
						VpaAddress: '',
						contact: '',
					};
				});
			},
			onSubmit(values) {
				let _this = this as any;
				_this.visible = true;
			},
			onFailed(errorInfo) {
				let _this = this as any;
				const { message, name } = errorInfo.errors[0];
				Dialog.alert({
					message: message,
					confirmButtonColor: '#1970FA',
					className: 'custom-dialog',
					confirmButtonText: 'Ok',
				}).then(() => {
					_this.$refs[name][0].focus();
				});
			},
		},
	})
	export default class Withdraw extends Vue {
		private active: boolean = true;
		private info: object = {
			amount: '',
			beneficaryName: '',
			beneficaryAccount: '',
			IFSC: '',
			VpaAddress: '',
			contact: '',
		};
		private infoList: object = {
			amount: {
				title: 'Amount',
				maxlength: 10,
				show: true,
				type: 'digit',
				placeholder: 'Please enter the amount',
				rules: [{ required: true, message: 'Please enter the Amount' }],
			},
			beneficaryName: {
				title: 'Beneficary Name',
				maxlength: 30,
				show: true,
				placeholder: 'Max length 30 Character',
				rules: [{ required: true, message: 'Please enter the Beneficary Name' }],
			},
			contact: {
				title: 'Client Remark',
				maxlength: 15,
				show: true,
				type: 'tel',
				placeholder: 'Max length 15 Character',
				desc: '(mobile phone)',
				rules: [{ required: true, message: 'Please enter the Client Remark' }],
			},
			beneficaryAccount: {
				title: 'Beneficary Account',
				show: true,
				maxlength: 34,
				type: 'digit',
				placeholder: 'Max length 34 Character',
				rules: [
					{ required: true, message: 'Please enter the Beneficary Account' },
				],
			},
			IFSC: {
				title: 'IFSC-Code',
				maxlength: 11,
				show: true,
				placeholder: 'ifsCode Always 11 character',
				rules: [
					{ required: true, message: 'Please enter the IFSC-Code' },
					{
						pattern: /[a-zA-Z0-9]{11,11}$/,
						message: 'IFSC-Code Format Error',
					},
				],
			},
			VpaAddress: {
				title: 'VpaAddress',
				type: 'textarea',
				show: false,
				showWordLimit: true,
				placeholder: '3 to 100 characters',
				rules: [
					{ required: true, message: 'Please enter the VpaAddress' },
					{ pattern: /[a-zA-Z0-9@]{3,100}$/, message: '3 to 100 characters' },
				],
				maxlength: 100,
			},
		};
		private visible: boolean = false;
		private visible2: boolean = false;

		@Watch('active')
		changeType(nVal: boolean, oval: boolean) {
			let _this = this as any;
			if (_this.active) {
				this.infoList['VpaAddress'].show = false;
				this.infoList['beneficaryAccount'].show = true;
				this.infoList['IFSC'].show = true;
				this.info['beneficaryAccount'] = '';
				this.info['IFSC'] = '';
			} else {
				this.infoList['VpaAddress'].show = true;
				this.infoList['IFSC'].show = false;
				this.infoList['beneficaryAccount'].show = false;
				this.info['VpaAddress'] = '';
			}
		}
	}
</script>
<style lang="scss">
	.withdraw {
		background-color: white;
		padding-bottom: 2.5rem;
		padding-top: 1rem;
		min-height: 100vh;
		position: relative;
		.submit-info {
			padding: 0.2rem;
		}
		.input-box-title {
			font-size: 0.25rem;
			color: #333;
			padding: 0.28rem 0;
			font-weight: 700;
		}

		.withdraw-models {
			@include _flexRow();
			position: fixed;
			top: 0;
			z-index: 9999;
			left: 0;
			width: 100%;
			> div {
				width: 50%;
				height: 1rem;
				line-height: 1rem;
				text-align: center;
				border-left: 0.01rem solid white;
				background-color: #f7f7f7;
				font-size: 0.35rem;
				color: #333;
				font-weight: 800;
				&:first-child {
					border-left: none;
				}
				&.active {
					background-color: $primaryColor;
					color: white;
				}
			}
		}
	}
</style>
