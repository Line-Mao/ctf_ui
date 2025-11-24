import { challenges } from "../mock.js";

export default {
  data() {
    return {
      selectedDifficulty: "all",
      selectedCategory: "all",
      searchText: "",

      challenges: [
        { id: 1, title: "Web安全 - XSS漏洞利用", difficulty: "中等", category: "Web", people: 85, score: 230 },
        { id: 2, title: "密码学 - RSA基础", difficulty: "简单", category: "Crypto", people: 142, score: 180 },
        { id: 3, title: "逆向工程 - 恶意软件分析", difficulty: "困难", category: "Reverse", people: 32, score: 450 },
        { id: 4, title: "取证分析 - 日志分析", difficulty: "中等", category: "Forensics", people: 67, score: 210 },
        { id: 5, title: "网络协议 - TCP分析", difficulty: "简单", category: "Web", people: 112, score: 195 },
        { id: 6, title: "AI安全 - 对抗样本", difficulty: "困难", category: "AI", people: 18, score: 500 }
      ]
    };
  },

  computed: {
    filteredChallenges() {
      return this.challenges.filter(c => {
        const diffOK = (this.selectedDifficulty === "all" || c.difficulty === this.selectedDifficulty);
        const cateOK = (this.selectedCategory === "all" || c.category === this.selectedCategory);
        const searchOK = (this.searchText === "" || c.title.toLowerCase().includes(this.searchText.toLowerCase()));
        return diffOK && cateOK && searchOK;
      });
    }
  },

  methods: {
    setDifficulty(d) { this.selectedDifficulty = d; },
    setCategory(c) { this.selectedCategory = c; },
    open(id) { location.hash = "/challenge/" + id; }
  },

  template: `
    <div class="page challenge-page">

      <h2 class="page-title">挑战题库</h2>
      <p class="page-subtitle">支持搜索 + 难度筛选 + 分类筛选</p>

      <!-- 搜索框 -->
      <div class="search-bar">
        <input 
          v-model="searchText" 
          class="search-input" 
          placeholder="搜索题目关键字，如：XSS、RSA、逆向..."
        >
      </div>

      <!-- 筛选栏 -->
      <div class="filter-bar">
        <div class="filter-group">
          <span class="filter-label">难度：</span>
          <button :class="{active: selectedDifficulty==='all'}" @click="setDifficulty('all')">全部</button>
          <button :class="{active: selectedDifficulty==='简单'}" @click="setDifficulty('简单')">简单</button>
          <button :class="{active: selectedDifficulty==='中等'}" @click="setDifficulty('中等')">中等</button>
          <button :class="{active: selectedDifficulty==='困难'}" @click="setDifficulty('困难')">困难</button>
        </div>

        <div class="filter-group">
          <span class="filter-label">类别：</span>
          <button :class="{active: selectedCategory==='all'}" @click="setCategory('all')">全部</button>
          <button :class="{active: selectedCategory==='Web'}" @click="setCategory('Web')">Web</button>
          <button :class="{active: selectedCategory==='Crypto'}" @click="setCategory('Crypto')">Crypto</button>
          <button :class="{active: selectedCategory==='Reverse'}" @click="setCategory('Reverse')">Reverse</button>
          <button :class="{active: selectedCategory==='AI'}" @click="setCategory('AI')">AI</button>
          <button :class="{active: selectedCategory==='Forensics'}" @click="setCategory('Forensics')">Forensics</button>
        </div>
      </div>

      <div class="challenge-grid">
        <div class="challenge-card"
             v-for="c in filteredChallenges"
             @click="open(c.id)">

          <div class="tag" :class="c.difficulty">{{ c.difficulty }}</div>

          <div class="title">{{ c.title }}</div>

          <div class="meta-row">
            <div class="meta">
              <span>👥 {{ c.people }}</span>
              <span>⭐ {{ c.score }}</span>
            </div>
            <div class="lock">🔒</div>
          </div>
        </div>
      </div>

    </div>
  `
};
