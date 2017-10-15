import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//导入主体功能组件
import HomeContainer from '@/components/containers/HomeContainer.vue'
import MemberContainer from '@/components/containers/MemberContainer.vue'
import CartContainer from '@/components/containers/CartContainer.vue'
import SearchContainer from '@/components/containers/SearchContainer.vue'

//导入新闻相关组件
import NewsList from '@/components/news/list.vue'
import NewsDetail from '@/components/news/detail.vue'

//导入图片相关组件
import PicList from '@/components/picture/list.vue'
import PicDetail from '@/components/picture/detail.vue'

//导入商品相关组件
import GoodsList from '@/components/product/list.vue'
import GoodsDetail from '@/components/product/detail.vue'
import GoodsDesc from '@/components/product/desc.vue'
import GoodsComment from '@/components/product/comment.vue'

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/cart',
      component: CartContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/news/list',
      component: NewsList
    },
    {
      path: '/news/detail/:id',
      component: NewsDetail
    },
    {
      path: "/pic/list",
      redirect: "/pic/list/0"
    },
    {
      path: '/pic/list/:id',
      component: PicList
    },
    {
      path: '/pic/detail/:id',
      component: PicDetail
    },
    {
      path: "/goods/list",
      component: GoodsList
    },
    {
      path: "/goods/detail/:id",
      component: GoodsDetail,
      name: "goodsdetail"
    },
    {
      path: "/goods/desc/:id",
      component: GoodsDesc
    },
    {
      path: "/goods/comment/:id",
      component: GoodsComment
    },
    
    
    
  ]
})
