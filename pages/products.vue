<template>
  <div class="container-course">
    <div class="products">
      <div class="blank">

      </div>
      <div class="color">
        <div class="card-type">
          <h3>季卡</h3>
          <p>价格: 19800元</p>
          <p>有效期: 90天</p>
          <br>
        </div>
        <div class="card-type">
          <h3>半年卡</h3>
          <p>价格: 36980元</p>
          <p>有效期: 180天</p>
          <br>
        </div>
        <div class="card-type">
          <h3>一年卡</h3>
          <p>价格: 66666元</p>
          <p>有效期: 365天</p>
          <br>
        </div>
        <div class="card-type-once">
          <h3>次卡</h3>
          <p>次数: 12次</p>
          <p>价格: 5616元</p>
          <p>有效期: 60天</p>
        </div>
        <div class="card-type-no loader"></div>

      </div>
  
    </div>
    <div class="Pilates instructor"

    </div>

    <share-link />
    <footer-black />

  </div>
</template>

<script setup>
  useHead({
    title: '普拉提课程',
    meta: [
      { hid: 'keywords', name: 'keywords', content: '普拉提,宁波普拉提价格, Pilates,' },

      { hid: 'description', name: 'description', content: '普拉提课程介绍' }
    ]
  })
</script>

<style scoped>
  .container-course {
    position: absolute; /* 或者使用 absolute，取决于具体布局需求 */
    width: 100%; /* 或者使用 vw 单位 */
  }
  .products {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    background-image: url('assets/images/once-course.jpg');
    background-size: cover; /* 背景图片铺满整个div */
    background-repeat: no-repeat; /* 不重复 */
    background-position: center;
    height: 120vh; /* 设置div高度为300像素，你可以根据需要调整高度 */
  }

  .color {
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: 1fr;
    /* grid-column-gap: 10px;*/
    justify-content: space-evenly; 
    align-items: center;
  }
  .card-type, .card-type-once {
    border: 1px solid orange; /* 添加1像素实心橘黄色边框 */
    border-radius: 5px; /* 圆角半径为5px */
    padding: 5px;
    margin: 8px;
    transition: transform 0.3s ease;
  }
  .card-type-once {
    border: 1px solid rgb(8, 64, 250);
  }
  .card-type:hover, .card-type-once:hover  {
  transform: scale(1.3); /* 悬停时将元素放大到110% */
}
  .card-type-no{
    margin: 10px; /* 添加上下左右的内边距为10px，或者根据需要调整 */
    padding: 5px;
    color:orange;
  }
  h3 {
    font-size: 100%;
    font-weight: bold;
    color: orange; /* 设置橙色 */
  }
  p {
    font-size: 90%;
    color: white; /* 设置白色 */
  }
  @media (max-width: 768px) {
    .color {
      grid-template-columns: auto;
      grid-template-rows: auto;
      align-content: space-around
    }
    .card-type, .card-type-once {
      /* width: 80%; */
      padding: 8% 15% 2% 15%;
    }
  }
</style>