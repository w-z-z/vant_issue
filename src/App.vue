<!--
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-12-21 10:03:49
 * @LastEditors: ranli
-->
<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator';
	@Component
	export default class App extends Vue {}
</script>
