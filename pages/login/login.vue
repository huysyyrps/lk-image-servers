<template>
	<view id="v-out">
		<view id="v-test"></view>

		<view id="v-loginout">
			<text id="tv-login">欢迎使用磁粉探伤系统</text>
			<text>用户名</text>
			<view class="v-login">
				<image id="img-username" src="../../static/login/username.png"></image>
				<input class="logindata" id="in-username" placeholder="请输入用户名" maxlength="15" :value="value"
					@input="onInputUserName" />
			</view>
			<text>密 码</text>
			<view class="v-login">
				<image id="img-password" src="../../static/login/password.png"></image>
				<input class="logindata" id="in-password" placeholder="请输入密码" maxlength="10" :password="showPassword" @input="onInputPassWord"/>
				<image id="img-ear" src="../../static/login/loginear.png" @click="showPwd"></image>
			</view>
			<button id="btn-login" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				userName: "",
				passWord:"",
				
				logindata:{
					name: 'userName',
					pwd:'userName'
				}
			}
		},
		methods: {
			showPwd: function() {
				this.showPassword = !this.showPassword;
			},
			onInputUserName(e) {
				console.log(e.detail)
				this.userName = e.detail
			},
			onInputPassWord(e){
				console.log(e.detail)
				this.passWord = e.detail
			},
			login: function() {
				if (this.userName == "") {
					alert("请输入用户名")
					return
				}
				if (this.passWord == "") {
					alert("请输入密码")
					return
				}
				uni.redirectTo({
				    url: '../image/image'
				});
				// this.$post("mobile.do",this.logindata)
				// .then(resp=>{
				// 	console.log(resp);
				// 	if(resp.success){
				// 		uni.redirectTo({
				// 		    url: '../index/index'
				// 		});
				// 	}else{
				// 		uni.showToast({
				// 			icon:'error',
				// 			title:resp.msg
				// 		})
				// 		uni.redirectTo({
				// 		    url: '../index/index'
				// 		});
				// 	}
				// })
			}
		}
	}
</script>

<style>
	@import "./login.css";
</style>
