<template>
  <div class="comments">
    <div class="comment-post">
      <h4>发表评论</h4>
      <hr>
      <textarea name="" id="" cols="30" rows="3" placeholder="请输入评论内容，最多输入120字" v-model="commentContent"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    </div>
    <div class="comment-list" v-show="isShow">
      <div class="comment-item" v-for="(item, index) in commentList" :key="index">
        <div class="comment-info">
          <span>第{{index + 1}}楼</span>
          <span>用户：{{item.user_name}}</span>
          <span>发表时间: {{item.add_time | dateFormat}}</span>
        </div>
        <div class="comment-content">
          {{item.content}}
        </div>
      </div>
      
      <mt-button type="danger" size="large" :plain="true" @click="getMore" :disabled="isNoMoreData" v-show="commentList.length>0">加载更多</mt-button>
      
      <!-- {{this.articleId}} -->
    </div>
  </div>
</template>

<script>
  //导入config配置文件，获取配置数据
  import config from '../../config/config'
  //导入提示信息内容
  import { Toast } from 'mint-ui'
  
  export default {
    data(){
      return{
        commentList: [],
        pageindex: 1,
        isNoMoreData: false,
        commentContent: "",
        isShow:true
      }
    },
    created() {
      this.getData();
    },
    methods:{
      //点击发送评论
      postComment(){
        //评论内容非空时
        if(this.commentContent.trim()){
          this.$http.post(config.apiUrl + "/api/postcomment/" + this.articleId, {content: this.commentContent}, {emulateJSON: true}).then(function(res){
            var data = res.body;
            if(data.status == 0){
              // console.log(data)
              //添加到评论数组中，便于渲染至页面
              this.commentList.unshift({
                user_name: "匿名用户",
                add_time: new Date().toGMTString(),
                content: this.commentContent
              })
              //清空文本框内容
              this.commentContent = "";
            }
          })
        }else{
          Toast({
            message: '请输入评论内容',
            duration: 500
          });
        }
      },
      //获取评论数据
      getData() {
        this.$http.get(config.apiUrl + '/api/getcomments/' + this.articleId, { params: { pageindex: this.pageindex } }).then(function(res) {
          var data = res.body;
//          console.log(data);
          if (data.status == 0) {
            //获取数据不为空时，拼接原有的数据
            if(data.message.length > 0){
              this.commentList = this.commentList.concat(data.message);
            }else{
            //获取数据为空
              if(this.pageindex !=1 ){
                Toast({
                  message: '没有更多内容了',
                  duration: 500
                });
                //使加载更多按键失效
                this.isNoMoreData = true;
              }
          
            }
          }
          //bug存在处-----------------------------------
          if(this.commentList == [] || this.commentList.toString() == 0){
            this.isShow = false;
          }else{
            this.isShow = true;
          }
//          console.log(this.commentList);
        });
      },
      //点击加载更多评论
      getMore(){
        this.pageindex ++;
        this.getData();
      },
    },
    //接收父组件传来的数据
    props:[
      "articleId"
    ]
  }
</script>

<style scoped>
  textarea {
    margin-bottom: 0;
  }
  
  .comment-info {
    margin: 5px auto;
    background-color: #ccc;
    line-height: 30px;
  }
  
  .comment-content {
    text-indent: 2em;
  }
  
  .comments {
    margin-bottom: 10px;
    padding: 0px 3px;
  }
</style>
