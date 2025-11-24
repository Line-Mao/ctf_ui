export default {
  data() {
    return {
      ranks: [
        { name: "CyberNinja", score: 5476 },
        { name: "WhiteHat_2025", score: 5120 },
        { name: "ZeroDay", score: 4862 },
        { name: "SecMaster", score: 4550 },
        { name: "CTF_Champion", score: 4320 },
        { name: "DigitalShield", score: 4142 },
        { name: "CodeBreaker", score: 3971 },
        { name: "HackerElite", score: 3760 },
        { name: "BinaryGuard", score: 3580 }
      ]
    };
  },

  template: `
    <div class="scoreboard-page page">

      <h2 class="page-title">实时排行榜</h2>
      <p class="page-subtitle">记录你在赛博空间中的真实实力</p>

      <div class="card rank-card">
        
        <div 
          class="rank-item" 
          v-for="(u, i) in ranks" 
          :key="i"
        >
          <div class="rank-number">#{{ i + 1 }}</div>

          <div class="rank-name">{{ u.name }}</div>

          <div class="rank-bar">
            <div class="rank-fill" :style="{ width: (u.score / ranks[0].score * 100) + '%' }"></div>
          </div>

          <div class="rank-score">{{ u.score }}</div>
        </div>

      </div>

    </div>
  `
};


