<!-- 导航修饰，比如固定位置，加上背景色，阴影等 -->
<template>

  <div class="custom-nav fixed-nav" :class="{ 'scrolling': isScrolling }">
    <h1 class="logo">Pilates</h1>
    <!-- <header-nav :data="navList" /> -->
    <header-nav />
  </div>


</template>
<script setup>
// const { t } = useI18n();
// const localPath = useLocalePath();
// const navList = ref([
//   { name: 'ALITA', link: localPath('/') },
//   { name: t('about_pilates'), link: localPath('/about' )},
//   { name: t('products_intro'), link: localPath('/products') }
// ]);
// console.log("ddddd",navList.value)

</script>

<!-- 在这个特定的样式规则中，它使得链接在被选中时文字颜色变为# -->
<style scoped>
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
@media (min-width: 576px) {
  h1{
    color: white;
    /* position: absolute; */
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5); /* 橘黄色的半透明背景 */
    height: 70px; /* 高度为20px */
    font-size: 16px; /* 字体大小为16px */
    
    transition: box-shadow 0.3s; /* 添加阴影过渡效果 */
  }

  .scrolling {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 滚动时添加阴影效果 */
  }
  /* 使用自定义CSS来固定导航 */
  
}

@media (max-width: 576px) {
  h1 {
    display: none;
  }
}
</style>