<template>
  <div>
    <!-- 首页轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="'http://127.0.0.1:8888' + item.images" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 首页导航 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu1.png" alt="">
        <div class="mui-media-body">新闻资讯</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu2.png" alt="">
        <div class="mui-media-body">图片分享</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div>
      </a></li>
    </ul>

  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'

  // 导出对象
  export default {
    data () {
      return {
        bannerList: []
      }
    },

    created () {
      this.getBanner()
    },

    methods: {
      getBanner () {
        this.$http.get('http://127.0.0.1:8888/vue/').then(result => {
          if (result.status === 200) {
            this.bannerList = result.body.data
            console.log(this.bannerList)
          } else {
            Toast('加载轮播图失败。')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        background: pink;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
      width: 60px;
      height: 60px;
    }

    .mui-media-body{
      font-size: 13px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }

</style>
