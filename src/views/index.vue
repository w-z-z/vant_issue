<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-11-03 10:38:29
 * @LastEditTime: 2020-12-22 15:58:49
 * @LastEditors: ranli
-->
<template>
	<div>
		<div class="nav-link">
			<div @click="changeRouter('/recharge')">
				Recharge Demo
			</div>
			<div @click="changeRouter('/withdraw')">
				Withdraw Demo
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	/* eslint-disable*/
	import { Component, Vue } from 'vue-property-decorator';
	import { mapGetters } from 'vuex';
	const is_add_api = Boolean(process.env.VUE_APP_ADD_API);
	@Component({
		computed: {
			...mapGetters(['token']),
		},
		methods: {
			changeRouter(router: string) {
				let _this = this as any;
				if (is_add_api) {
					if (_this.token) {
						_this.$router.push(router);
					} else {
						_this.$router.push('Login');
					}
				} else {
					_this.$router.push(router);
				}
			},
		},
	})
	export default class InterDemo extends Vue {}
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
			font-size: 0.35rem;
			&:active {
				opacity: 0.89;
			}
		}
	}
</style>
