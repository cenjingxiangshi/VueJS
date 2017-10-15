<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item, index) in news" :key="index">
        <router-link :to="'/news/detail/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  //导入config配置文件，获取配置数据
  import config from '../../config/config'
  
  export default {
    data(){
      return {
        news: [],
        apiUrl: config.apiUrl
      }
    },
    //通过在created钩子函数创建初期获取数据并渲染
    created(){
      this.$http.get(this.apiUrl + '/api/getnewslist').then(function (res) {
        var data = res.body;
        if(data.status == 0){
          this.news = data.message;
//          console.log(data);
        }
      })
    }
  }
  
 

</script>

<style scoped>
  .mui-ellipsis{
    color: #26A2FF;
    display: flex;
    justify-content: space-between;
  }
</style>
