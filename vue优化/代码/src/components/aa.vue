<template>
  <div class="mobile">
    <input type="text" v-model="mobile" placeholder="请输入您的手机号">
  </div>
  <div class="smscode">
    <a v-show="!counting" @click="getSmsCode">获取验证码</a>
    <span v-show="counting">{{countNum}}</span>    
  </div>
</template>

<script type="text/javascript">
  import {mapState} from "vuex"
  export default {
    name: "HelloWorld",
    data(){
      return {
        countNum: 0,
        counting: false,
        timer: null,
      }
    },
    computed: {
      ...mapState(['mobile'])
    },
    methods:{
      getSmsCode () {
        this.countWork();
      },
      countWork () {
        var self = this;
        if(self.countNum > 0){
          self.counting = true;
          self.timer = setTimeout(function(){
            self.countNum--;
            self.countWork();
          },1000)
        }else {
          self.counting = false;
        }
      }
    }
  }
</script>