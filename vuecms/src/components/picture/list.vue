<template>
  <div class="pic">
    <!--顶部导航部分-->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item" @click.prevent="goCategory(0)" >
            全部
          </a>
          
          <!-- 这里如果直接使用router-link 由于mui样式类的原因，会导致连接跳转不正常！ -->
          <!-- 就换一种实现方式，点击连接的时候，不使用to进行跳转，而是直接使用js代码的方式，进行跳转操作 -->
          <a class="mui-control-item" @click.prevent="goCategory(item.id)" v-for="(item, index) in categories" :key="index">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    
    <!--图片列表部分-->
    <div class="pic-list">
      <ul>
        <li v-for="(item, index) in pictures" :key="index">
          <router-link :to="'/pic/detail/' + item.id">
            <img v-lazy="picUrl + item.img_url">
            <div>
              <p>{{item.title}}</p>
              <p>{{item.zhaiyao}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  //导入config配置文件，获取配置数据
  import config from '../../config/config'
  //引入muijs组件
  import mui from "../../../lib/mui/js/mui"
  
  export default {
    data(){
      return{
        categories: [],
        pictures: [],
        picUrl: config.picUrl,
        isActive: true
      }
    },
    //el元素在被挂载到实例上之后调用mui方法
    mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    created(){
      //获取图片顶部导航分类数据
      this.$http.get(config.apiUrl + '/api/getimgcategory').then(function(res){
        var data = res.body;
        if(data.status == 0){
          this.categories = data.message;
        }
      });
      
      //初始化时获取图片列表数据
      this.getPicData();
    },
    methods:{
      //点击跳转
      goCategory(id){
        this.$router.push("/pic/list/" + id);
      },
      
      //获取图片列表数据
      getPicData(){
        this.$http.get(config.apiUrl + '/api/getimages/' + this.$route.params.id).then(function (res) {
          var data = res.body;
          if(data.status == 0){
            console.log(data);
            this.pictures = data.message;
          }
        });
      }
    },
    wacth:{
      $route(){
        this.getPicData();
      }
    }
  }
</script>

<style scoped>
  #slider{
    background-color: #fff;
  }
  
  .pic{
  }
  
  .pic-list ul{
    padding: 0 10px;
  }
  
  .pic-list li{
    list-style: none;
    background-color: #ccc;
    margin-bottom:10px;
    box-shadow: 0 0 15px #999;
    position: relative;
  }
  
  .pic-list li div{
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
  }
  
  .pic-list li div p{
    color: #fff;
  }
  
  img[lazy=loaded]{
    width: 100%;
    display: block;
  }
  
  img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
    display: block;
  }
</style>
