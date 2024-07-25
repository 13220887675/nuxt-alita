<template>
  <div>
    <AppHeader />

    <nuxt-page />
  </div>


</template>
<script>
// export default {
//   data() {
//     return {
//       isScrolling: false
//     };
//   },
//   mounted() {
//     if (process.client) {
//       window.addEventListener('scroll', this.handleScroll);
//     }
//   },
//   beforeDestroy() {
//     if (process.client) {
//       window.removeEventListener('scroll', this.handleScroll);
//     }
//   },
//   methods: {
//     handleScroll() {
//       if (process.client && window.scrollY > 0) {
//         this.isScrolling = true;
//         console.log("scrolling");
//       } else {
//         this.isScrolling = false;
//         console.log("not scrolling");
//       }
//     }
//   }
// };

</script>

<!-- 在这个特定的样式规则中，它使得链接在被选中时文字颜色变为# -->
<style scoped>

</style>