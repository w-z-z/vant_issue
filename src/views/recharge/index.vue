<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-12-18 14:45:22
 * @LastEditors: ranli
-->
<template>

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
			>
		</div>
	</div>

</template>
<script lang="ts">
	import { Component, Vue, Provide } from 'vue-property-decorator';
	declare function require(img: string): string; // 声明
	const images = [
		require('../../assets/example/demo(1).png'),
		require('../../assets/example/demo(2).png'),
		require('../../assets/example/demo(3).png'),
		require('../../assets/example/demo(4).png'),
		require('../../assets/example/demo(5).png'),
		require('../../assets/example/demo(6).png'),
	];
	import { ImagePreview } from 'vant';
	@Component({
		methods: {
			handleImagePreview(myImages, index) {
				let _this = this as any;
				ImagePreview({
					images: myImages,
					startPosition: index,
				});
			},
		},
	})
	export default class Dialog extends Vue {
		@Provide() private images = images;
	}
</script>
<style lang="scss">
	.examples {
		.demo-img {
			width: 50%;
			display: inline-block;
			margin: 0.1rem 0;
			&:nth-child(even) {
				text-align: right;
			}
			img {
				width: 3.125rem;
			}
		}
	}
</style>
