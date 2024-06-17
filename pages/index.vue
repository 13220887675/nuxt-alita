<template>
  <div class="container-all">
    <section class="pilates-people  ">
        <h2 class="hdnj" >
          <strong>呼吸精气，独立守神，肌肉若一</strong>
        </h2>
        <span class="en-vertical">Move Better, Live Better </span>
    </section>

    <section class="video-section">
      <div class="video-content">
        <div>
          <h2>普拉提——塑造健康生活的艺术</h2>
          <p>它远不止是一项运动<br>它是通往身心平衡的桥梁<br>它是一种全面的解决方案<br>它适用于寻求提高生活质量、缓解肌肉紧张的你
          <br>
          增强核心力量、改善体态，寻求一种减压放松的方式
          </p>
        </div>
        
      </div>
      <div class="video-container">
        <video autoplay loop muted>
          <source src="assets/videos/index_loop.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

    </section>
    
    <section class="language">

    </section>
        
    <!-- 页脚 -->
    <share-link />
    <footer-black />

  </div>
  


</template>

<script lang="ts" setup>
  useHead({
    title: '阿丽塔普拉提',
    meta: [
      { hid: 'keywords', name: 'keywords', content: '普拉提,宁波普拉提, Pilates, 塑形, 健身, 减肥, 塑形减肥, 减肥减脂, 疼痛' },

      { hid: 'description', name: 'description', content: '宁波阿丽塔普拉提，是一家专业的健身机构' }
    ]
  })
</script>

<style scoped>
.container-all {
  position: absolute; 
  width: 100%; /* 不加的话每次切到这个页面时右边会留白，然后才自动铺满*/
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(600px, auto) auto auto;
}

.pilates-people {
  position: relative;
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: repeat(1, 5fr) repeat(3, 1fr);
  background-image: url('assets/images/home/index.png');
  background-size: cover; /* 初始大小 */
  background-position: center;
  background-repeat: no-repeat; /* 背景图片不重复 */
}

.pilates-people::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(236, 236, 234, 0.301); /* 设置蒙版颜色和透明度 */
  backdrop-filter: blur(2px); /* 使用backdrop-filter属性来模糊蒙版 */
}

.hdnj {
  /* position: absolute; */
  grid-column: 2/3;
  grid-row: 2/3;
  z-index: 1; /* 设置span元素的堆叠顺序高于蒙版 */
  font-size: clamp(20px, 2vw, 35px); /* 设置字体大小 */
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 2px #000; /* 设置阴影 */
}
.en-vertical {
  position: relative;
  grid-column: 2/3;
  grid-row: 3/4;
  z-index: 1; /* 设置span元素的堆叠顺序高于蒙版 */
  font-size: clamp(14px, 2vw, 20px); /* 设置字体大小 */
  font-style: italic;
  font-weight: bold;
  color: #111111;
  text-decoration: underline; /* 使用 text-decoration 属性添加下划线 */
}

.video-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  /* justify-content: center; */
  align-items: center;
  z-index: -1;
  overflow: hidden; /* 隐藏溢出的视频部分 */
  background-color: lightgray;
}
.video-container,.video-content { 
  margin: 10%; 
}

.video-content h2 {
  font-size: 20px;
  font-weight: bold;
  line-height: 2;
}
.video-content p {
  font-size: 16px;
  line-height: 2;
}

@media (max-width: 768px) {
  .container-all {
    grid-template-rows: auto auto auto;
  }
  .pilates-people {
    grid-template-columns: 1fr;
  }
  .hdnj {
    grid-column: 1/2;
    text-align: center;
    
  }
  .en-vertical {
    grid-column: 1/2;
    text-align: center;
  }
  .video-section {
    grid-template-columns: 1fr;
  }
  .video-container,.video-content { 
    margin: 5%; 
    text-align: center;
  }
  .video-content p {
    font-size: 14px;
  }
}
</style>