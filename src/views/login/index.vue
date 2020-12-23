<template>
	<div class="login-box">
		<div class="login">
			<p
				ref="myp"
				class="recharge-title"
			>Recharge Login</p>
			<van-form @submit="onSubmit">
				<van-field
					v-model="username"
					name="username"
					left-icon="friends"
					placeholder="account"
					:rules="[{ required: true, message: 'account is required' }]"
				/>
				<van-field
					v-model="password"
					type="password"
					name="password"
					left-icon="lock"
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
	import {
		Component,
		Vue,
		Provide,
		ProvideReactive,
		Watch,
		Prop,
		PropSync,
		Model,
		Emit,
		Inject,
		InjectReactive,
		Ref,
	} from 'vue-property-decorator';
	import { Form, Button, Field, Toast, Icon } from 'vant';
	import lodash from 'lodash';
	let status = true;
	//  除了上面介绍的将beforeRouteLeave放在Component中之外,还可以全局注册,就是registerHooks
	// Component.registerHooks(['beforeRouteLeave', 'beforeRouteEnter']);

	//此装饰器 接收一个对象 可以再对象中声明 components methods  filters directives computed，watch 等未提供装饰器的选项
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
		// beforeRouteLeave(to: any, from: any, next: any) {
		// 	console.log('beforeRouteLeave');
		// 	next();
		// },
		// beforeRouteEnter(to: any, from: any, next: any) {
		// 	console.log('beforeRouteLeave');
		// 	next();
		// },
	})
	export default class Login extends Vue {
		private username: string = '';
		private password: string = '';
		//1: @Prop  属性定义 三种定义模式 传参的不懂代表的含义不同
		// @Prop(String) readonly name!: string | undefined;
		// @Prop({ default: 30, type: Number, required: false, validator: null })
		// private age!: number;
		// @Prop([String, Boolean]) private sex!: string | boolean;

		//  2:@PropSync
		// @PropSync装饰器与@prop用法类似，二者的区别在于：
		// @PropSync 装饰器接收两个参数：
		// propName: string 表示父组件传递过来的属性名；
		// options: Constructor | Constructor[] | PropOptions 与@Prop的第一个参数一致；
		// @PropSync 会生成一个新的计算属性。
		// @PropSync 注意,使用PropSync的时候是要在父组件配合.sync使用的

		// @PropSync('like', { type: String }) syncedlike!: string; // 用来实现组件的双向绑定,子组件可以更改父组件穿过来的值
		//  {{syncedlike}}  // 双向绑定,更改syncedlike会更改父组件的like

		// 3:@Model 装饰器允许我们在一个组件上自定义v-model，接收两个参数：
		// event: string 事件名。
		// options: Constructor | Constructor[] | PropOptions 与@Prop的第一个参数一致。
		// @Model('change', { type: String }) readonly checked!: string;
		// public inputHandle(that: any): void {
		// 	this.$emit('change', that.target.value); // 后面会讲到@Emit,此处就先使用this.$emit代替
		// }

		//  4:@Watch
		// @Watch 装饰器接收两个参数：
		// path: string 被侦听的属性名；
		// options?: WatchOptions={} options可以包含两个属性 ：
		// immediate?:boolean 侦听开始之后是否立即调用该回调函数；
		// deep?:boolean 被侦听的对象的属性被改变时，是否调用该回调函数；
		// @Watch('password', {
		// 	deep: true,
		// 	immediate: true,
		// })
		// onChildChanged(newValue: string, oldValue: string) {
		// 	console.log(newValue);
		// 	console.log(oldValue);
		// }
		//5 @Emit(event?:string)
		// @Emit 装饰器接收一个可选参数，该参数是$Emit的第一个参数，充当事件名。如果没有提供这个参数，$Emit会将回调函数名的camelCase转为kebab-case，并将其作为事件名；
		// @Emit会将回调函数的返回值作为第二个参数，如果返回值是一个Promise对象，$emit会在Promise对象被标记为resolved之后触发；
		// @Emit的回调函数的参数，会放在其返回值之后，一起被$emit当做参数使用。
		// @Emit('deletItem') private delEmitClick(event: MouseEvent) {}
		// @Emit()
		// addToCount(password: string) {
		// 	return this.password;
		// }

		//  6   @Ref(refKey?: string)
		// @Ref 装饰器接收一个可选参数，用来指向元素或子组件的引用信息。如果没有提供这个参数，会使用装饰器后面的属性名充当参数
		// @Ref('RefComponent') readonly myp!: RefComponent; 用来获取子组件的ref
		// @Ref('myp') readonly myp!: HTMLElementTagNameMap; 获取标签 ref
		// getmyRef() {
		// 	console.log(this.myp);
		// }

		// 提供/注入 属性装饰器,
		// 7 @Provide/@ProvideReactive   @Inject/@InjectReactive
		// 		提供/注入装饰器,
		// key可以为string或者symbol类型,

		// 相同点:Provide/ProvideReactive提供的数据,在内部组件使用Inject/InjectReactive都可取到
		// 不同点:
		// 如果提供(ProvideReactive)的值被父组件修改，则子组件可以使用InjectReactive捕获此修改。
		//  @Provide() foo = Symbol('fooaaa');
		//   @ProvideReactive() fooReactive = 'fooReactive';
		//   @ProvideReactive('1') fooReactiveKey1 = 'fooReactiveKey1';

		//使用装饰器模式监听watch后面跟方法

		// beforeRouteLeave(to: any, from: any, next: any) {
		// 	console.log('beforeRouteLeave');
		// 	next();
		// }

		// beforeRouteEnter(to: any, from: any, next: any) {
		// 	console.log('beforeRouteLeave');
		// 	next();
		// }
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
