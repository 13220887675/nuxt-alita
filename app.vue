<template>
  <div>
    <AppHeader />

    <nuxt-page />
  </div>


</template>
<script setup> //使用setup，下面是给html提供lang属性
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value
  }
});
</script>

<!-- 在这个特定的样式规则中，它使得链接在被选中时文字颜色变为# -->
<style scoped>

</style>