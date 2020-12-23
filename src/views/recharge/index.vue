
<template>
	<div class="recharge">
		<div class="title-hint">
			Please be sure to confirm the latest UPI account on this page for payment, otherwise the recharge will fail.
		</div>
		<div class="submit-info">
			<div class="title-step">
				<p class="title-main">Step1:Recharge Amount</p>
				<p class="title-desc">
					Please enter the amount you want to recharge
				</p>
			</div>
			<div class="recharge-content  ">
				<div class="input-number">
					<div class="input-box-list">
						<div class="input-box FLEXROW amount">
							<span>Rs</span>
							<input
								ref="amount"
								placeholder="Please input Amount"
								maxlength="15"
								v-model="userinfo.amount"
								v-on:input="userinfo.amount=userinfo.amount.replace(/[^\d]/g,'')"
								class="normal-input"
								name="amount"
								type="text"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="title-step">
				<p class="title-main">Step2:Copy UPI Information</p>
				<p class="title-desc">
					Open online banking or wallet, transfer to the UPI account
				</p>
				<p
					class="title-desc"
					style="color: red; font-size: 0.21rem;"
				><svg
						t="1602482250446"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="4287"
						width="0.23rem"
						height="0.23rem"
						class="icon"
					>
						<path
							d="M872.329623 147.671158C776.348369 52.389768 649.773091 0.09998 515.399336 0.09998H511.90002c-138.472955 0.999805-267.647725 54.589338-363.82894 150.970514C51.889865 247.351689-0.599883 375.626635 0.09998 512.199961c1.599688 282.144894 231.254833 511.800039 511.90002 511.800039 282.244874 0 511.90002-229.655145 511.90002-511.90002 0-137.873072-53.889475-267.347784-151.570397-364.428822z m-360.329623 661.870728c-28.294474 0-51.190002-22.895528-51.190002-51.190002 0-28.294474 22.895528-51.190002 51.190002-51.190002 28.294474 0 51.190002 22.895528 51.190002 51.190002 0 28.194493-22.895528 51.190002-51.190002 51.190002z m40.991994-181.664518c0 22.595587-18.296426 40.991994-40.991994 40.991993-22.595587 0-40.991994-18.296426-40.991994-40.991993l-40.991994-331.435267c0-45.191174 36.692833-81.884007 81.884008-81.884007s81.884007 36.692833 81.884007 81.884007L552.991994 627.877368z"
							fill="red "
							p-id="4288"
						></path>
					</svg> The UPI account may be changed at any time, please do not save The UPI account.</p>
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
				<p style="padding-top: .1rem; color: #666666;">
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
						width="0.23rem"
						height="0.23rem"
					>
						<path
							d="M872.329623 147.671158C776.348369 52.389768 649.773091 0.09998 515.399336 0.09998H511.90002c-138.472955 0.999805-267.647725 54.589338-363.82894 150.970514C51.889865 247.351689-0.599883 375.626635 0.09998 512.199961c1.599688 282.144894 231.254833 511.800039 511.90002 511.800039 282.244874 0 511.90002-229.655145 511.90002-511.90002 0-137.873072-53.889475-267.347784-151.570397-364.428822z m-360.329623 661.870728c-28.294474 0-51.190002-22.895528-51.190002-51.190002 0-28.294474 22.895528-51.190002 51.190002-51.190002 28.294474 0 51.190002 22.895528 51.190002 51.190002 0 28.194493-22.895528 51.190002-51.190002 51.190002z m40.991994-181.664518c0 22.595587-18.296426 40.991994-40.991994 40.991993-22.595587 0-40.991994-18.296426-40.991994-40.991993l-40.991994-331.435267c0-45.191174 36.692833-81.884007 81.884008-81.884007s81.884007 36.692833 81.884007 81.884007L552.991994 627.877368z"
							fill="#ff0000"
							p-id="4288"
						></path>
					</svg>
					Please enter 12-digit the REF No./Reference No./UTR of your payment and we will finish your recharge as soon as possible.
				</p>
			</div>
			<div class="input-box amount  FLEXROW">
				<input
					ref="transactionNo"
					maxlength="12"
					placeholder="Please input 12 Arabic numerals"
					v-on:input="userinfo.transactionNo=userinfo.transactionNo.replace(/[^\d]/g,'')"
					v-model="userinfo.transactionNo"
					class="normal-input"
					name="refNo"
					type="text"
				/>
			</div>
			<div class="submit-button-box">
				<div
					@click="submitInfo"
					class="submit-button"
				>Submit Ref No</div>
			</div>

		</div>
		<!-- example -->
		<div class="example-content">
			<div class="title-step">
				<p class="title-main Example"> Ref No. Example</p>
				<p class="title-desc">
					Click on the picture to view details
				</p>
			</div>
			<div class="examples">
				<div
					class="demo-img"
					v-for='(item,index) in images'
					:key='"gg"+index'
				>
					<img
						@click.stop="handleImagePreview(images,index)"
						:src="require(`../../assets/example/thumbnail/demo(${index+1}).png`)"
						alt="img"
					/>
					<p
						class="demo-text"
						v-if='index===0'
					>message</p>
					<p
						class="demo-text"
						v-if='index===1'
					>PhonePe </p>
					<p
						class="demo-text"
						v-else-if='index===2'
					>GooglePaly</p>
					<p
						class="demo-text"
						v-else-if='index===3'
					>Paytm</p>
					<p
						class="demo-text"
						v-else-if='index===4'
					>other</p>
					<p
						class="demo-text"
						v-else-if='index===5'
					>other</p>
				</div>
			</div>
		</div>

		<!-- COPY -->
		<van-dialog
			className='custom-dialog'
			confirm-button-text='OK'
			v-model="showCopyHint"
		>
			<div
				style="text-align: center;"
				class="confirm-Result"
			>
				<div>
					<img
						width="50%"
						:src="require(`../../assets/succ.png`)"
						alt="assetsimg"
					>
				</div>
				<br>
				<p style="
      font-size: .42rem;
      font-weight: bold;
      color: #3381FF;">
					Copy Success
				</p>
				<br>
				<p style="
      color: #666666;
      font-size: .25rem;">
					Please be sure to confirm the latest UPI account on this
					page for transfer, otherwise the recharge will fail.
				</p>
			</div>
		</van-dialog>
		<!-- userinfo-submit -->
		<van-dialog
			v-model="visible"
			@confirm='confirm()'
			@cancel='visible=true'
			show-cancel-button
			className='custom-dialog'
			confirm-button-text='Comfirm'
			title="Please Comfirm The Information"
			cancel-button-text='Cancel'
		>
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
		</van-dialog>
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import clipboard from 'clipboard';
	declare function require(img: string): string; // 声明
	import { commit, getUpi } from '@/api/login';
	import { ImagePreview, Toast, Dialog } from 'vant';
	import lodash from 'lodash';
	let status = true;
	type userInfo = {
		UPI: string;
		amount: string;
		transactionNo: string;
	};
	const images = [
		require('../../assets/example/demo(1).png'),
		require('../../assets/example/demo(2).png'),
		require('../../assets/example/demo(3).png'),
		require('../../assets/example/demo(4).png'),
		require('../../assets/example/demo(5).png'),
		require('../../assets/example/demo(6).png'),
	];
	@Component({
		components: { [Dialog.Component.name]: Dialog.Component },
		methods: {
			confirm: lodash.throttle(function () {
				if (!status) {
					return false;
				}
				let _this = this as any;
				const refNo: String = _this.userinfo.transactionNo;
				status = false;
				commit({ refNo })
					.then((res) => {
						Dialog.alert({
							message: 'submit successfully',
							confirmButtonColor: '#1970FA',
							className: 'custom-dialog',
							confirmButtonText: 'Ok',
						}).then(() => {
							_this.userinfo.amount = '';
							_this.userinfo.transactionNo = '';
						});
						status = true;
					})
					.catch((res) => {
						status = true;
					});
			}, 3000),
			handleImagePreview(myImages: Array<string>, index: number) {
				let _this = this as any;
				ImagePreview({
					images: myImages,
					startPosition: index,
				});
			},
			submitInfo() {
				let _this = this as any;
				let { amount, transactionNo } = _this.userinfo;
				if (!amount) {
					_this.$refs['amount'].focus();
					return false;
				}
				if (!transactionNo) {
					_this.$refs['transactionNo'].focus();
					return false;
				}
				if (transactionNo.length <= 11) {
					Dialog.alert({
						message: 'This Ref No. should be 12 Arabic numerals',
						confirmButtonColor: '#1970FA',
						className: 'custom-dialog',
						confirmButtonText: 'Ok',
					}).then(() => {
						_this.$refs['transactionNo'].focus();
					});

					return false;
				}
				_this.visible = true;
			},
			getUpi() {
				let _this = this as any;
				let loding = Toast.loading({
					message: 'loading...',
					forbidClick: true,
					duration: 0,
				});
				getUpi().then((res: any) => {
					loding.clear();
					_this.userinfo.UPI = res.data || '***********@icici';
				});
			},
		},
	})
	export default class Recharge extends Vue {
		private visible: boolean = false;
		private visible2: boolean = false;
		private showCopyHint: boolean = false;
		private images: string[] = images;
		private infoListTitle: userInfo = {
			amount: 'Recharge Amount：',
			UPI: 'UPI：',
			transactionNo: 'Ref No：',
		};
		private userinfo: userInfo = {
			UPI: '***********@icici',
			amount: '',
			transactionNo: '',
		};
		created() {
			let _this = this as any;
			_this.getUpi();
			_this.$nextTick(() => {
				let clipboard4 = new clipboard('.copyBtn4');
				clipboard4.on('success', (e) => {
					_this.showCopyHint = true;
				});
			});
		}
	}
</script>
<style lang="scss">
	.recharge {
		min-height: calc(100vh - 1rem);
		padding-bottom: 2.5rem;
		background: white;
		.submit-info {
			padding: 0 0.2rem;
		}
		.title-hint {
			background: #fff6f5;
			color: #ff6533;
			padding: 0.15rem 0.21rem;
			font-size: 0.21rem;
		}

		.hint-text {
			color: #666;
			font-size: 0.25rem;
		}
		.example-content {
			background-color: #fff6f5;
			padding: 0 0.3rem 0.2rem;
			margin-top: 0.3rem;
			.title-main {
				font-size: 0.25rem;
				font-weight: 600;
				color: #333;
			}
			.examples {
				.demo-img {
					width: 50%;
					display: inline-block;
					margin-bottom: 0.2rem;
					padding: 0 0.2rem;
					box-sizing: border-box;
					img {
						width: 100%;
					}
				}
				.demo-text {
					font-size: 0.25rem;
					color: #333;
					text-align: center;
					padding-top: 0.1rem;
				}
			}
		}
	}
</style>
