<template>
  <div>
    <div class="mobile">
      <input type="text" v-model="mobile" placeholder="请输入您的手机号">
    </div>
    <div class="smscode">
      <a v-show="!counting" @click="getSmsCode">获取验证码</a>
      <span v-show="counting">{{countNum}}</span>    
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from "vuex"
  export default {
    name: "HelloWorld",
    data(){
      return {
        countNum: 10,
        counting: false,
      }
    },
    computed:{
      //...mapState(['mobile'])
      mobile:{
        get:function (){
          return this.$store.state.mobile
        },
        set:function(val){
          this.$store.state.mobile = val
        }
      }
    },
    methods:{
      getSmsCode () {
        //this.getCaptchaCode();
        this.countWork();
      },
      countWork () {
        this.counting = true;
        let auth_timer = setInterval(()=>{
          this.countNum--;
          if(this.countNum==0){
            this.counting = false;
            clearInterval(auth_timer);
            this.countNum = 10;
          }
        },1000)
      }
    }
  }
</script>