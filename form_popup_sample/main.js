Vue.component("user-login", {
  template: `
    <div id="login-template">
        <div>
            <input type="text" placeholder="ログインID" v-model="userid">
        </div>
        <div>
            <input type="password" placeholder="パスワード" v-model="password">
        </div>
        <button @click="login">ログイン</button>
    </div>
    `,
  data: () => {
    return {
      userid: "test",
      password: "test",
    };
  },
  methods: {
    login() {
      auth.login(this.userid, this.password);
    },
  },
});

const auth = {
  login: (id, pass) => {
    window.alert("userid:" + id + "\n" + "password:" + pass);
  },
};

new Vue({
  el: "#login-example",
});
