<template>
  <div class="Top">
    <span id="tubiao">图标</span>
    <ul class="Top-li">
      <a href="#"><li>1</li></a>
      <a href="#"><li>2</li></a>
      <a href="#"><li>3</li></a>
      <a href="#"><li>4</li></a>
      <a href="#"><li>5</li></a>
      <a href="#"><li>6</li></a>
      <a href="#"><li>7</li></a>
      <a href="#"><li>8</li></a>
      <a href="#"><li>9</li></a>
    </ul>
    <div class="Top-time">
      <i class="el-icon-goods"></i>
      <span class="time">{{ nowTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      nowWeek: "",
      nowDate: "",
      nowTime: "",
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
  methods: {
    setNowTimes() {
      let myDate = new Date();
      // console.log(myDate)
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      let sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.nowDate = yy + "年" + mm + "月" + dd + "日";
      this.nowTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week;
    },
  },
};
</script>


<style lang="scss" scoped>
.Top {
  //   background-color: #bfa;
  width: 1260px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: -4px -4px 12px rgb(255 255 255),
    4px 4px 12px rgb(121 130 160 / 75%);
  span {
    border: 1px solid #000;
    margin: auto 20px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: -4px -4px 12px rgb(255 255 255),
      4px 4px 12px rgb(121 130 160 / 75%);
  }
  .Top-time {
    i {
      font-size: 45px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time {
      width: 65px;
      float: right;
    }
  }

  .Top-li {
    width: 800px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    li {
      width: 40px;
      height: 40px;
      padding: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: -4px -4px 12px rgb(255 255 255),
        4px 4px 12px rgb(121 130 160 / 75%);
      transition: 0.1s;
    }
    li:hover {
      transform: scale(1.05);
    }
  }
}
</style>