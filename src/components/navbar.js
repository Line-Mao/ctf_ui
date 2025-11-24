export default {
  template: `
    <div class="navbar-container">

      <div class="navbar">

        <div class="nav-left">CTF 安全平台</div>

        <div class="nav-links">
          <router-link to="/home" class="nav-item">首页</router-link>
          <router-link to="/challenges" class="nav-item">题库</router-link>
          <router-link to="/scoreboard" class="nav-item">排行榜</router-link>
          <router-link to="/" class="nav-item nav-login">登录</router-link>
        </div>

      </div>

      <div class="nav-glow-line"></div>

    </div>
  `
};








