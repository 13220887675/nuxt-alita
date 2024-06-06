<template>
  <div class="container-all">
    <div class="content-body">
      <div class="Pilates-introduce">
        <div class="Pilates-introduce-img">
            <img src="assets/images/Joseph-Pilates-1.jpg" alt="Joseph" title="Joseph Pilates">
        </div>
        <div class="Pilates-introduce-content">
          <h1 class="text-3xl font-bold mb-8 mt-11">什么是普拉提</h1>
          <div class="border" style="border-color: rgb(151, 61, 1);">
            <p class="text-base leading-relaxed  ml-4 mr-4 mt-4 text-left" style="text-indent: 2em;">
            普拉提，这个名字源自于20世纪初的德国，由一位名叫约瑟夫·普拉提的健身大师所创造。它起初是为了帮助受伤的士兵恢复身体而诞生，但很快，它的魅力就吸引了全世界。普拉提不仅仅是一种锻炼，它是一种艺术，一种让身体变得强健、灵活、平衡的艺术。
            </p>
            <br>
            <p class="text-base leading-relaxed ml-4 mr-4 mb-4 text-left" style="text-indent: 2em;">
              普拉提的练习方式多种多样，既有使用各种酷炫器械的，也有在垫子上进行的。这些练习不仅让你的肌肉变得更强壮，还能让你的姿势更挺拔，减少背痛，甚至帮你减轻压力和焦虑。
            </p>
          </div>
        </div>
      </div>
      <el-divider content-position="right" class="color-line"><span class="line-content" style="color: rgb(151, 61, 1);">ALITA普拉提</span></el-divider>
      <div class="Pilates-introduce">
        <div class="Pilates-introduce-content">
          <h1 class="text-3xl font-bold mb-8 mt-11" style="text-align: right;">适用人群</h1>
          <div class="border" style="border-color: rgb(151, 61, 1);">
            <p class="text-base leading-relaxed  ml-4 mr-4 mt-4 text-left" style="text-indent: 2em;">
              普拉提是一种适合所有人的锻炼方式，尤其适合康复中的患者、孕妇、老年人、运动员、办公室工作者、健身爱好者、初学者、寻求放松的人，以及追求健康生活的人

            </p>
            <br>
            <p class="text-base leading-relaxed ml-4 mr-4 mb-4 text-left" style="text-indent: 2em;">
              它能帮助提高核心稳定性、改善身体姿态、减少背痛、提高平衡能力和灵活性。特别是对于老年人和有特殊健康状况的人，普拉提的低冲击性使其成为理想选择。
            </p>
          </div>
        </div>
        <div class="Pilates-introduce-img">
          <img src="assets/images/about-2.jpg" alt="Joseph" title="Joseph Pilates">
        </div>
      </div>
      <el-divider content-position="left"><p class="line-content" style="color: rgb(151, 61, 1);">ALITA普拉提</p></el-divider>
      <div class="Pilates-introduce">
        <div class="Pilates-introduce-img">
            <img src="assets/images/about-3.png" alt="Joseph" title="Joseph Pilates">
        </div>
        <div class="Pilates-introduce-content">
          <h1 class="text-3xl font-bold mb-8 mt-11">常见运动对比</h1>
          <div class="border" style="border-color: rgb(151, 61, 1);">
            <p class="text-base leading-relaxed  ml-4 mr-4 mt-4 text-left" style="text-indent: 2em;">
              普拉提与瑜伽相比，更侧重于核心肌群的强化和身体协调性，同时它是一种低冲击性的锻炼方式，适合各种身体状况的人群。普拉提通过精确控制和协调的练习，有助于提高身体的稳定性和平衡能力，而瑜伽则更注重深度伸展和灵活性的提升。
            </p>
            <br>
            <p class="text-base leading-relaxed ml-4 mr-4 mb-4 text-left" style="text-indent: 2em;">
              与力量训练相比，普拉提强调的是全身均衡发展和低受伤风险的锻炼。它通过一系列的练习来增强身体的协调性和平衡，同时提高身体的柔韧性和关节的活动范围。力量训练（如硬拉、杠铃等）则主要关注于肌肉力量和体积的增加，通常伴随着较高的冲击和强度。
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer-black />
  </div>



</template>
<script lang="ts" setup>
  useHead({
    title: '关于普拉提',
    meta: [
      { hid: 'keywords', name: 'keywords', content: '普拉提,宁波普拉提, Pilates, 普拉提作用, 普拉提功效, 普拉提效果,普拉提适用人群,塑形, 健身, 减肥, 塑形减肥, 减肥减脂, 疼痛' },

      { hid: 'description', name: 'description', content: '普拉提作为一种低冲击、注重身体核心力量和整体协调性的运动，适合多种人群进行练习' }
    ]
  })
</script>
<style scoped>
/* .container-all {
  background-color: rgba(0, 0, 0, 0.1);
} */
.content-body {
  margin: 0 auto;
  width: 95%;
}
.Pilates-introduce {
  position: relative;
  display: flex;
  height: 500px;
  width: 100%;
  margin-right: 0;
}
.Pilates-introduce-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Pilates-introduce-img img {
  margin: 20px 0 20px 20px;
  max-width: 100%;
  width: 500px;
}

.Pilates-introduce-content {
  flex: 6;
  padding: 60px;
}
h1 {
  color: rgb(151, 61, 1);
}
.divider {
    text-align: center;
    margin: 20px 0;
  }
  .divider span {
    border-bottom: 1px solid blue;
    display: inline-block;
    width: 40%;
  }
  .divider .text {
    color: red;
    padding: 0 5px;
  }
</style>
