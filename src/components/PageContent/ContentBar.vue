<template>
  <div class="page_content">
    <div class="user_detail">
      <div class="user_task">
        <div v-if="task[0] === 1" class="current">Thông tin khách hàng</div>
        <div
          v-if="task[0] === 0"
          class="normal"
          @click="(task[0] = 1), (task[1] = 0)"
        >
          Thông tin khách hàng
        </div>
        <div v-if="task[1] === 1" class="current">Tìm kiếm</div>
        <div
          v-if="task[1] === 0"
          class="normal"
          @click="(task[0] = 0), (task[1] = 1)"
        >
          Tìm kiếm
        </div>
      </div>
      <div class="user_service" v-if="task[0] == 1">
        <div v-if="isChoose[0] == 1">
          <img src="../../assets/image/bi_info-circle-fill.png" alt="" />
        </div>
        <div v-else>
          <img
            @click="isChoosed(0)"
            src="../../assets/image/Group.png"
            alt=""
          />
        </div>
        <div v-if="isChoose[1] == 1">
          <img src="../../assets/image/chatch.png" alt="" />
        </div>
        <div v-else>
          <img
            @click="isChoosed(1)"
            src="../../assets/image/bi_chat.png"
            alt=""
          />
        </div>
        <div v-if="isChoose[2] == 1">
          <img src="../../assets/image/emailch.png" alt="" />
        </div>
        <div v-else>
          <img
            @click="isChoosed(2)"
            src="../../assets/image/eva_email-outline.png"
            alt=""
          />
        </div>
        <div v-if="isChoose[3] == 1">
          <img
            src="../../assets/image/fluent_clipboard-task-20-filled.png"
            alt=""
          />
        </div>
        <div v-else>
          <img
            @click="isChoosed(3)"
            src="../../assets/image/bx_bx-task.png"
            alt=""
          />
        </div>
      </div>
      <div class="detail_content" v-if="task[0] == 1 && isChoose[0] == 1">
        <div class="user_header">
          <div class="user_avatar">
            <img src="../../assets/image/avatar.png" alt="" />
          </div>
          <div class="user_state">
            <div class="username">Đặng Long</div>
            <div class="state">
              <div class="vip_state">VIP</div>
              <div class="active_state">ACTIVE</div>
              <div class="tpin_state">TPIN</div>
            </div>
          </div>
        </div>
        <div class="info_field">
          <div class="field_item">
            <div class="field_icon">
              <img src="../../assets/image/mail.png" alt="" />
            </div>
            <div class="field_name">Mail</div>
          </div>
          <div class="field_item">
            <div class="field_icon">
              <img src="../../assets/image/Card.png" alt="" />
            </div>
            <div class="field_name">Số CMND</div>
          </div>
          <div class="field_item">
            <div class="field_icon">
              <img src="../../assets/image/Phone.png" alt="" />
            </div>
            <div class="field_name">Số điện thoại</div>
          </div>
          <div class="field_item">
            <div class="field_icon">
              <img
                src="../../assets/image/fa-regular_address-book.png"
                alt=""
              />
            </div>
            <div class="field_name">Địa chỉ</div>
          </div>
        </div>
      </div>
    </div>
    <div class="list_user" v-if="task[0] == 1">
      <div class="add_user_but">Thêm người dùng</div>
      <div class="list_task">
        <div v-if="list_task[0] == 1" class="list_task_active">Danh sách người dùng</div>
        <div v-else class="list_task_nor" @click="taskChoosed(0)">Danh sách người dùng</div>
        <div v-if="list_task[1] == 1" class="list_task_active">Ghi chú</div>
        <div v-else class="list_task_nor" @click="taskChoosed(1)">Ghi chú</div>
        <div></div>
      </div>
      <div v-if="list_task[0] == 1">
        <table class="list_user_table">
          <thead>
            <td></td>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Date</td>
            <td>Score</td>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.STT">
              <td><input type="checkbox" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ContentBar",
  data() {
    return {
      users: [],
      isChoose: [1, 0, 0, 0],
      task: [1, 0],
      list_task:[1,0],
      info_field: [
        {
          icon: "../../assets/image/mail.png",
          name: "Mail",
        },
        {
          icon: "../../assets/image/Card.png",
          name: "Số CMND",
        },
        {
          icon: "../../assets/image/Phone.png",
          name: "Số điện thoại",
        },
        {
          icon: "../../assets/image/fa-regular_address-book.png",
          name: "Địa chỉ",
        },
      ],
    };
  },
  methods: {
    isChoosed(params) {
      this.isChoose = [0, 0, 0, 0];
      this.isChoose[params] = 1;
    },
    taskChoosed(params) {
      this.list_task = [0, 0];
      this.list_task[params] = 1;
    },
  },
  mounted() {
    var self = this;
    axios
      .get("https://api.npoint.io/553f7ce1ce02b0193a0a")
      .then((response) => {
        self.users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style>
.page_content {
  left: 50px;
  position: fixed;
  height: 660px;
  top: 50px;
  width: 1400px;
  display: flex;
}
.user_detail {
  width: 400px;
  border: 1px solid rgb(216, 216, 216);
  height: 650px;
  border-top: none;
}
.user_task {
  display: flex;
  border-bottom: 2px solid orange;
}
.user_task > div {
  width: 50%;
  height: 37px;
  text-align: center;
  padding-top: 12px;
  color: rgb(216, 216, 216);
  font-weight: 300;
  font-family: Arial;
}
.current {
  color: orange !important;
  background: linear-gradient(
    180deg,
    rgba(250, 200, 164, 0.296) 0%,
    rgba(255, 182, 33, 0) 100%
  );
}
.user_service {
  display: flex;
  justify-content: space-between;
}
.user_service > div {
  width: 25%;
  height: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.normal {
  border-top: 1px solid rgb(216, 216, 216);
  border-left: 1px solid rgb(216, 216, 216);
  border-right: 1px solid rgb(216, 216, 216);
}
.detail_content {
  margin-top: 70px;
  height: 500px;
}
.user_header {
  display: flex;
}
.user_avatar {
  width: 25%;
}
.user_service > div > img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
}
.user_avatar > img {
  width: 100%;
}
.state {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.vip_state {
  border-radius: 15px;
  background-color: orange;
  color: white;
  padding: 5px 15px;
  margin-right: 15px;
}
.active_state {
  border-radius: 15px;
  background-color: green;
  color: white;
  padding: 5px 20px;
  margin-right: 15px;
}
.tpin_state {
  border-radius: 15px;
  background-color: pink;
  color: red;
  padding: 5px 15px;
  margin-right: 15px;
}
.username {
  font-weight: bold;
  margin-left: 10px;
  font-family: Arial;
  margin-top: 25px;
}
.field_icon > img {
  width: 25px;
  height: 20px;
  margin-right: 30px;
}
.field_item {
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
}
.list_user_table {
  width: 800px;
}
table,
th,
td {
  border: 1px solid rgb(196, 194, 194);
  border-collapse: collapse;
}
td {
  padding: 5px;
}
thead > td {
  padding: 10px;
  background-color: rgb(232, 226, 226);
  font-weight: 350;
  font-family: Arial;
  color: rgb(92, 89, 89);
}
table {
  margin-left: 10px;
}
.add_user_but {
  margin-left: 820px;
  margin-top: 15px;
  width: 150px;
  padding: 10px;
  background-color: rgb(76, 193, 232);
  color: white;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 15px;
}
*{
  font-family: Arial;
}
.list_task{
  display: flex;
  margin-left: 10px;
  border-bottom: 2px solid orange;
  margin-bottom: 15px;
  border-collapse: collapse;
}
.list_task_active {
  border-top: 2px solid orange;
  padding: 5px 10px;
  border-left:2px solid rgb(196, 194, 194);
  border-right:2px solid rgb(196, 194, 194);
  border-collapse: collapse;
}
.list_task_nor{
  padding: 5px 10px;
  border-left:2px solid rgb(196, 194, 194);
  border-right:2px solid rgb(196, 194, 194);
  border-top: 2px solid rgb(196, 194, 194);
}
</style>
