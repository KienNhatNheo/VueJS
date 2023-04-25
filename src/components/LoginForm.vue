<template>
  <div class="login">
    <div class="login_form">
      <div class="form_content">
        <div class="form_name">Customer Care</div>
        <form @submit.prevent="Submit">
          <label for="username" class="field_name">Tên đăng nhập</label><br />
          <input
            v-model="form.email"
            type="text"
            class="input_field"
            id="username"
            name="username"
            placeholder="example@gmail.com"
          /><br />
          <label for="password" class="field_name"> Mật khẩu</label><br />
          <input
            v-model="form.password"
            type="password"
            class="input_field"
            name="password"
            id="password"
            placeholder="******************"
          /><br />
          <input type="checkbox" name="isRemember" />
          <label for="isRemember" class="isRemember">Ghi nhớ?</label><br />
          <button type="submit" class="login_button">Đăng nhập</button>
        </form>
      </div>
    </div>
    <img class="login_img" src="../assets/image/Image.png" />
  </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        Submit(){
            this.$store.commit('login',this.form.email)
        }
    }
}
</script>
<style>
.login {
  margin-top: 7%;
  margin-left: 13%;
  margin-right: 11%;
  height: 529px;
  overflow: hidden;
}
.login_form {
  height: 529px;
  width: 40%;
  position: absolute;
  background-color: #fffcfc;
}
.form_content {
  border: 2px solid rgb(216, 216, 216);
  padding-left: 18%;
  padding-right: 20%;
  margin-left: 0;
  height: 100%;
  border-radius: 15px;
  box-shadow: 3px 3px 3px;
}
.form_name {
  font-family: Arial;
  color: #f57212;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 30px;
  margin-top: 65px;
}
.field_name {
  color: #0070d2;
  font-family: Arial;
  font-weight: 500;
}
.input_field {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 45px;
  border-radius: 10px;
  outline: rgb(216, 216, 216);
  padding-left: 20px;
}
.login_img {
  width: 70%;
  height: 532.2px;
  margin-left: 30%;
}
@media only screen and (max-width: 600px) {
  .login_img {
    display: none;
  }
  .form_content {
    width: 300px;
  }
  .login {
    margin: 5%;
    height: 400px;
  }
}
.isRemember {
  margin-left: 4px;
  color: #0070d2;
  margin-bottom: 40px;
  font-family: Arial;
}
.login_button {
  width: 384.68px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 45px;
  border-radius: 10px;
  background-color: #0070d2;
  color: white;
  outline: none;
  margin-top: 30px;
  font-family: Arial;
  font-weight: 500;
  font-size: 15px;
}
</style>
