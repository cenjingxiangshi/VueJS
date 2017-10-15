<template>
  <div>
    <!--轮播图区域-->
    <!--<mt-swipe :auto="4000">-->
      <!--<mt-swipe-item v-for="(item,index) in picList" :key="index"><img :src="apiUrl + item.img" alt=""></mt-swipe-item>-->
    <!--</mt-swipe>-->
    <swiper :pic-list="picList"></swiper>
    
    <!--九宫格区域-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="../../assets/menu3.png" alt="">
          <div class="mui-media-body">
            新闻资讯
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/pic/list">
          <img src="../../assets/menu4.png" alt="">
        
          <div class="mui-media-body">
            图片分享
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/goods/list">
          <img src="../../assets/menu5.png" alt="">
          <div class="mui-media-body">
            商品购买
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="../../assets/menu6.png" alt="">
          <div class="mui-media-body">
            留言反馈
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="../../assets/menu9.png" alt="">
          <div class="mui-media-body">
            视频专区
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="../../assets/menu10.png" alt="">
          <div class="mui-media-body">
            联系我们
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  //导入config配置文件，获取配置数据
  import config from '../../config/config'
  //导入轮播图组件
  import swiper from '../subcomps/swiper.vue'
  
  
  export default {
    data(){
      return {
        picList: [],
        apiUrl: config.apiUrl
      }
    },
    
    //通过在created钩子函数创建初期获取首页数据并渲染
    created(){
      this.$http.get( this.apiUrl + "/api/getlunbo").then(function (res) {
        var data = res.body;
        //响应数据状态为0时
        if(data.status == 0) {
          data.message.forEach(v => {
            v.img = this.apiUrl + v.img;
          });
          //绑定到一个数组类型对象中
          this.picList = data.message;
        }
      })
    },
    components:{
      swiper
    }
  }
</script>

<style scoped>
  .mint-swipe{
     height: 180px;
   }
  .mint-swipe-item:nth-child(1){
    background-color: red;
  }
  .mint-swipe-item:nth-child(2){
    background-color: green;
  }
  .mint-swipe-item:nth-child(3){
    background-color: blue;
  }
  .mint-swipe-item img{
    /*width:100%;*/
    height:180px;
  }

  /*设置导航栏背景色*/
  .mui-grid-view.mui-grid-9 {
    background-color: white;
    border-top: none;
  }
  
  /*设置图标大小*/
  .mui-table-view-cell img{
    width: 60px;
  }
  
  /*清除边框颜色*/
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }
  
</style>
