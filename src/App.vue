<template>
  <div v-if="$store.state.email">
    <div>
      <div class="bar">
        <div class="bar_content">
          <div style="display: flex">
            <div class="bar_content_active"></div>
            <RouterLink to="/demo1"
              ><img class="img" src="./assets/image/Contact.png" alt=""
            /></RouterLink>
          </div>
          <div>
            <RouterLink to="/demo2"
              ><img class="img" src="./assets/image/Note.png" alt=""
            /></RouterLink>
          </div>
          <div>
            <RouterLink to=""
              ><img
                class="img"
                style="
                  width: 25px;
                  height: 25px;
                  margin-top: 10px;
                  margin-left: 12.5px;
                "
                src="./assets/image/Chat.png"
                alt=""
            /></RouterLink>
          </div>
          <div>
            <RouterLink to=""
              ><img class="img" src="./assets/image/Chart.png" alt=""
            /></RouterLink>
          </div>
        </div>
        <div class="bar_logout">
          <a @click.prevent="logout"
            ><img class="img" src="./assets/image/Logout.png" alt=""
          /></a>
        </div>
      </div>
      <div class="page_content">
        <RouterView />
      </div>
    </div>
  </div>
  <div v-if="!$store.state.email">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
  onBeforeMount() {},
  mounted() {
    this.$store.state.email = localStorage.getItem("email");
  },
};
</script>
<style scoped>
.bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 112, 210, 0.8);
  width: 50px;
  height: 671px;
  top: 50px;
  left: 0;
  position: fixed;
}
img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
}
.bar_content_active {
  width: 15%;
  background: orange;
  z-index: 3;
}
.bar_content {
  background: #0070d2;
}
.bar_logout {
  margin-bottom: 40px;
}
.page_content {
  left: 50px;
  position: fixed;
  height: 671px;
  top: 50px;
}
</style>
