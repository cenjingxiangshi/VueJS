<template>
  <div>
    <div class="news-title">
      <h4 v-text="newsData.title"></h4>
      <p class='mui-ellipsis'>
        <span>发表时间：{{newsData.add_time  | dateFormat}}</span>
        <span>点击：{{newsData.click}}次</span>
      </p>
    </div>
    <div class="news-content" v-html="newsData.content">
    
    </div>
    
    <!-- {{newsData.id}} -->
    <comments :article-id="this.$route.params.id"></comments>
  </div>
</template>

<script>
  //导入config配置文件，获取配置数据
  import config from '../../config/config'
  //导入评论组件
  import comments from '../subcomps/comments.vue'
  
  export default {
    data(){
      return {
        newsData: {id : 0}
      }
    },
    
    created(){
      this.$http.get(config.apiUrl + '/api/getnew/' + this.$route.params.id).then(function (res) {
        var data = res.body;
        console.log(res);
        if(data.status == 0){
          this.newsData = data.message[0];
        }
      })
    },
    components:{
      comments
    }
    
  }
</script>

<style>
  .mui-ellipsis{
    color: #26A2FF;
    display: flex;
    justify-content: space-between;
  }
  
  .news-title{
    border-bottom: 1px solid #ccc;
  }
  
  .news-content{
    padding:10px;
  }
  
  .news-content img{
    width: 100%;
  }
</style>
