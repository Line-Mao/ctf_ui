export default {
  data() {
    return {
      username: localStorage.getItem("username")||"无用户名",
      todayNew: 38,
      runningEvents: 5,

      hotEvent: {
        name: "2025全国网络安全精英挑战赛",
        desc: "汇集全国顶尖安全团队的年度盛事，包含 Web 安全、逆向工程、密码学等领域挑战",
        start: "11月05日",
        end: "12月15日",
        people: 1248,
        leftTime: "23天 14:38:22"
      },

      recommended: [
        { title: "Web安全 - XSS漏洞利用", level: "中等", people: 85, score: 230 },
        { title: "密码学 - RSA基础", level: "简单", people: 142, score: 180 },
        { title: "逆向工程 - 恶意软件分析", level: "困难", people: 32, score: 450 },
        { title: "取证分析 - 日志分析", level: "中等", people: 67, score: 210 },
        { title: "网络协议 - TCP分析", level: "简单", people: 112, score: 195 },
        { title: "AI安全 - 对抗样本", level: "困难", people: 18, score: 500 },
      ],

      progress: {
        score: 2025,
        rank: 10000,
        rate: 20,
      },

      ranking: [
        { name: "BinaryGuard", score: 3580 },
        { name: "HackerElite", score: 3760 },
        { name: "CodeBreaker", score: 3971 },
        { name: "DigitalShield", score: 4142 },
        { name: "CTF_Champion", score: 4320 },
        { name: "SecMaster", score: 4550 },
        { name: "ZeroDay", score: 4862 },
        { name: "WhiteHat_2025", score: 5120 },
        { name: "CyberNinja", score: 5476 },
      ]
    };
  },

  template: `
    <div class="page home-page">

      <!-- 顶部欢迎语 -->
      <div class="welcome">
        <h2>欢迎回来，<span>{{ username }}</span></h2>
        <p>今日共 <b>{{ todayNew }}</b> 个新挑战待解锁 · 当前有 <b>{{ runningEvents }}</b> 场赛事进行中</p>
      </div>

      <!-- 热门比赛 -->
      <div class="card hot-event">
        <div>
          <div class="event-status">进行中</div>
          <h3>{{ hotEvent.name }}</h3>
          <p class="event-desc">{{ hotEvent.desc }}</p>
          <p class="event-meta">{{ hotEvent.start }} - {{ hotEvent.end }} · {{ hotEvent.people }} 人参与</p>
        </div>

        <div class="countdown-card">
          <div class="countdown-title">比赛剩余时间</div>
          <div class="countdown-time">{{ hotEvent.leftTime }}</div>
        </div>
      </div>

      <!-- 推荐挑战 -->
      <h3 class="sub-title">推荐挑战</h3>
      <div class="challenge-grid">
        <div class="challenge-card" v-for="c in recommended">
          <div class="tag" :class="c.level">{{ c.level }}</div>
          <div class="title">{{ c.title }}</div>
          <div class="meta">{{ c.people }} 人参与 · ⭐ {{ c.score }}</div>
        </div>
      </div>

      <!-- 进度模块 -->
      <h3 class="sub-title">我的进度</h3>
      <div class="card progress-card">
        <div class="progress-left">
          <div class="score">{{ progress.score }}</div>
          <div class="rank">全球排名：#{{ progress.rank }}</div>
        </div>

        <div class="circle">
          <div class="mask full"></div>
          <div class="mask half"></div>
          <div class="inside-circle">{{ progress.rate }}%</div>
        </div>
      </div>

      <!-- 实时排行榜 -->
      <h3 class="sub-title">实时排行榜</h3>
      
      <div class="card rank-card home-rank-card">
      
        <div class="rank-item" v-for="(r, i) in ranking.slice(0, 3)">

          <div class="rank-number">#{{ i + 1 }}</div>
      
          <div class="rank-name">{{ r.name }}</div>
      
          <div class="rank-bar">
            <div 
              class="rank-fill"
              :style="{ width: (r.score / ranking[ranking.length - 1].score * 100) + '%' }"
            ></div>
          </div>
      
          <div class="rank-score">{{ r.score }}</div>
        </div>
      
      </div>


    </div>
  `,
};
