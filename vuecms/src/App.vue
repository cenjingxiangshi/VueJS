<template>
  <div id="app">
    <!--头部-->
    <mt-header fixed title="固定在顶部">
      <mt-button slot="left" icon="back" @click="$router.back()" v-if="$route.path!='/'">返回</mt-button>
    </mt-header>
    <!--路由部分-->
    <router-view></router-view>
    <!--导航部分-->
    
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" @click='goTo("/")'>
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" @click='goTo("/member")'>
                <span class="mui-icon mui-icon-contact">
                </span>
        <span class="mui-tab-label">会员</span>
      </a>
      <a class="mui-tab-item" @click='goTo("/cart")'>
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{$store.getters.cartsTotalCount}}</span>
                </span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" @click='goTo("/search")'>
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goTo(route){
      this.$router.push(route);
    }
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
body{
  background-color: white;
}

#app{
  padding-top: 40px;
  padding-bottom: 50px;
}
  
</style>
