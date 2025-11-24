export default {
  data() {
    return {
      username: "",
      password: "",
      captcha: ""
    };
  },
  template: `
    <div class="page-center">
      <div>
        <div class="hero-title">网络安全 <span>CTF 平台</span></div>
        <div class="hero-sub">2025 年最先进的网络安全攻防训练场 · 开启你的CTF之旅</div>

        <div class="login-card">
          <div class="login-title">用户登录</div>
          <div class="login-sub">欢迎回到安全世界，共同捍卫网络安全</div>

          <input class="input" v-model="username" placeholder="请输入 CTF 用户名">
          <input class="input" v-model="password" type="password" placeholder="密码">

          <input class="input" v-model="captcha" placeholder="请输入验证码">

          <button class="btn-login" @click="login">登录 CTF 平台</button>
        </div>
      </div>
    </div>
  `,
  methods: {
    login() {
      if (!this.username || !this.password || !this.captcha) {
        alert("请输入完整信息");
        return;
      }
	  localStorage.setItem("username", this.username);
	  this.$router.push("/home");
      alert("登录成功！（模拟）");
	  location.hash = "/home";
    }
  }
};

