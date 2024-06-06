<template>
  <div class="container">
    <div class="custom-nav fixed-nav" :class="{ 'scrolling': isScrolling }">
      <h1 class="logo">Pilates</h1>
      <ul>
        <li><NuxtLink to="/">ALITA</NuxtLink></li>
        <li><NuxtLink to="/about">关于普拉提</NuxtLink></li>
        <li><NuxtLink to="/products" class="btn">课程介绍</NuxtLink></li>
      </ul>
    </div>

    <div class="content">
      <nuxt-page />
    </div>
  </div>
  <!-- <el-menu 
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  :ellipsis="false" 
  :style="{ 
  background: 'linear-gradient(to right, rgba(255, 165, 0, 0.1), rgba(255, 165, 0, 1))' 
  }"
  >

    <img
    style="width: 100px; pointer-events: none;user-select:none ;" 
    src="~assets/images/logo.png"
    alt="Element logo"
    @click.stop
    />
    

    <div class="flex-grow" />
    <el-menu-item index="1" class="font-bold">
      <NuxtLink to="/">Home</NuxtLink></el-menu-item>
    <el-menu-item index="2" class="font-bold">
      <NuxtLink to="/about">About</NuxtLink></el-menu-item>
    <el-menu-item index="3" class="font-bold">
      <NuxtLink to="/products" class="btn">Products</NuxtLink></el-menu-item>
  </el-menu>

  <nuxt-page /> -->

</template>
<script>
export default {
  data() {
    return {
      isScrolling: false
    };
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if (process.client && window.scrollY > 0) {
        this.isScrolling = true;
        console.log("scrolling");
      } else {
        this.isScrolling = false;
        console.log("not scrolling");
      }
    }
  }
};

</script>

<!-- 在这个特定的样式规则中，它使得链接在被选中时文字颜色变为# -->
<style scoped>
h1{
    color: white;
    position: absolute;
    left: 10px;
    top: 0;
    line-height: 80px;
    background-image: url(assets/images/logo.png); /* 背景图片 */
    background-size: 100%; /* 背景图片大小*/
    background-repeat: no-repeat; /* 背景图片不重复 */
    background-position: left; /* 背景图片位置 */
    width: 210px;
    text-indent: -99999px; /* 隐藏文字 */
}
  .router-link-exact-active {
      color: #42a7b9;
  }
  .custom-nav {
  background-color: rgba(255, 255, 255, 0.5); /* 橘黄色的半透明背景 */
  height: 70px; /* 高度为20px */
  font-size: 16px; /* 字体大小为16px */
  
  transition: box-shadow 0.3s; /* 添加阴影过渡效果 */
}
li:hover {
  color: rgb(255, 115, 0); /* 鼠标悬停时文字颜色变为橙红色 */

}
.scrolling {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 滚动时添加阴影效果 */
}
/* 使用自定义CSS来固定导航 */
@media (min-width: 640px) {
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .content {
    padding-top: 80px; /* 顶部的高度 */
  }
  ul{
    position: absolute;
    right: 5vw;
    top: 0;
    line-height: 80px;
  }
  li{
    display: inline-block;
    margin-right: 4vw; /* vw是视窗宽度的百分比，px像素 */
    user-select: none;
  }  
}
</style>