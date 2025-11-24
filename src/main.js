import router from "./router.js";
import NavBar from "./components/navbar.js";
import FooterBar from "./components/footer.js";

const App = {
  components: { NavBar, FooterBar },
  template: `
    <div>
      <NavBar />

      <!-- 正确的 router-view + transition 写法 -->
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <FooterBar />
    </div>
  `
};

Vue.createApp(App).use(router).mount("#app");

