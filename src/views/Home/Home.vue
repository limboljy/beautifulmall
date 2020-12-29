<template>
  <div id="home">
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'/>
    <recommend-view :recommend='recommend'/>
    <feature-view/>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import HomeSwiper from "views/Home/childComps/HomeSwiper";
import RecommendView from 'views/Home/childComps/RecommendView';
import FeatureView from 'views/Home/childComps/FeatureView';
import { getHomeMultidata } from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommend: []
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
    });
  },
};
</script>

<style> 
</style>