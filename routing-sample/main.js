const getUsers = (callback) => {
  setTimeout(() => {
    callback(null, [
      {
        id: 1,
        name: "Kinniku Taro",
      },
      {
        id: 2,
        name: "Gorigori Maccho ",
      },
    ]);
  }, 1000);
};

const UserList = Vue.component("user-list", {
  template: `
    <div>
      <div class="loaging" v-if="loading">読み込み中...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-for="user in users" :key="user.id">
          <h2>{{ user.name }}</h2>
      </div>
    </div>
  `,
  data() {
    return {
      loading: false,
      users: function () {
        return [];
      },
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      this.loading = true;
      getUsers((err, users) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.users = users;
        }
      });
    },
  },
});

const router = new VueRouter({
  routes: [
    {
      path: "/top",
      component: {
        template: "<div>トップページです。</div>",
      },
    },
    {
      path: "/users",
      component: UserList,
    },
  ],
});

const app = new Vue({
  el: "#app",
  router: router,
});
