import { challenges } from "../mock.js";

export default {
  template: `
    <div class="challenge-detail-page">
      
      <!-- 顶部科技条 -->
      <div class="top-glow-line"></div>

      <!-- 标题 -->
      <h1 class="challenge-title">
        {{ challenge.title }}
      </h1>

      <!-- 基本信息卡片 -->
      <div class="info-card">
        <div><strong>类别：</strong> {{ challenge.category }}</div>
        <div><strong>难度：</strong> {{ ['简单','中等','困难'][challenge.difficulty-1] }}</div>
        <div><strong>分值：</strong> {{ challenge.score }}</div>
      </div>

      <!-- 题目说明 -->
      <div class="detail-card">
        <h2 class="section-title">题目说明</h2>
        <p class="section-content">{{ challenge.description }}</p>
      </div>

      <!-- Hint -->
      <div class="detail-card">
        <h2 class="section-title">提示 Hint</h2>
        <p class="section-content">{{ challenge.hint }}</p>
      </div>

      <!-- Flag 提交 -->
      <div class="flag-card">
        <h2 class="section-title">提交 Flag</h2>

        <div class="flag-row">
          <input class="flag-input" placeholder="CTF{your_flag_here}">
          <button class="flag-btn">提交</button>
          <button class="back-btn" @click="$router.push('/challenges')">返回题库</button>
        </div>

      </div>

    </div>
  `,

  computed: {
    challenge() {
      const id = this.$route.params.id;
      return challenges.find(c => c.id == id) || {};
    }
  }
};

