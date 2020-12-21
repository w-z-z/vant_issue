<template>
	<div class="login-box">
		<div class="login">
			<p class="recharge-title">Recharge Demo</p>
			<van-form @submit="onSubmit">
				<van-field
					v-model="username"
					name="username"
					label="account:"
					placeholder="account"
					:rules="[{ required: true, message: 'account is required' }]"
				/>
				<van-field
					v-model="password"
					type="password"
					name="password"
					label="password:"
					placeholder="password"
					:rules="[{ required: true, message: 'password is required' }]"
				/>
				<div style="margin: 16px;">
					<van-button
						round
						block
						type="info"
						native-type="submit"
					>Login</van-button>
				</div>
			</van-form>
		</div>
	</div>

</template>

<script lang="ts">
	import { Component, Vue, Provide } from 'vue-property-decorator';
	import { Form, Button, Field, Toast } from 'vant';
	import lodash from 'lodash';
	let status = true;
	@Component({
		components: { [Form.name]: Form, [Field.name]: Field, [Button.name]: Button },
		methods: {
			onSubmit: lodash.throttle(function (values) {
				let _this = this as any;
				if (!status) {
					return false;
				}
				const loading = Toast.loading({
					message: 'Logging...',
					duration: 0,
					forbidClick: true,
				});
				_this.$store
					.dispatch('Login', values)
					.then(() => {
						loading.clear();
						Toast.success({
							message: 'Login Success',
							forbidClick: true,
						});
						setTimeout(() => {
							Toast.clear();
							status = true;
							_this.$router.push({
								path: '/recharge',
							});
						}, 1000);
					})
					.catch(() => {
						loading.clear();
						status = true;
					});
			}, 1500),
		},
	})
	export default class Withdraw extends Vue {
		@Provide() private username = '';
		@Provide() private password = '';
	}
</script>
<style lang="scss">
	.recharge-title {
		text-align: center;
		font-size: 0.35rem;
		padding: 0.2rem 0;
		font-weight: 700;
		color: $primaryColor;
	}
	.login-box {
		height: 100vh;
		@include _flexColumn();
	}
	.login {
		width: 80%;
		margin: 0 auto;
		background: white;
		padding: 0.2rem;
		border-radius: 5px;
	}
</style>
