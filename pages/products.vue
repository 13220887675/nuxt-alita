<template>
  <div class="container-course">
    <div class="products">
      <div class="blank">

      </div>
      <div class="color">
        <div class="once-course">
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
        </div>

        <div class="times-course">
          <div class="card-type-times">
            <h3>次卡</h3>
            <p>次数: 12次</p>
            <p>价格: 5616元</p>
            <p>有效期: 60天</p>
          </div>
          <div class="card-type-no loader"><h3></h3></div>
          <div></div>
        </div>
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
    display: flex;
    flex-direction: column;   /* 将子元素设为纵向排列 */
    justify-content: space-between;  /* 子元素纵向平均分配空间 */
    align-items: center;
    background-image: url('assets/images/once-course.jpg');
    background-size: cover; /* 背景图片铺满整个div */
    background-repeat: no-repeat; /* 不重复 */
    width: 100%; /* 设置div宽度为100% */
    height: 100vh; /* 设置div高度为300像素，你可以根据需要调整高度 */
  }
  .blank, .color {
    flex: 1; /* Each child takes equal space */
    display: flex;
    width: 100vw;
    height: 50%;
  }
  .color {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .once-course, .times-course {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; /* 让内容水平居中 */
    width: 100%;
    height: 100%;
    flex: 1; /* Each child takes equal space */
    color: white;
  }
  .card-type, .card-type-times {
    margin: 10px; /* 添加上下左右的内边距为10px，或者根据需要调整 */
    border: 1px solid orange; /* 添加1像素实心橘黄色边框 */
    border-radius: 5px; /* 圆角半径为5px */
    padding: 8px;
    transition: transform 0.3s ease;
  }
  .card-type:hover, .card-type-times:hover {
  transform: scale(1.1); /* 悬停时将元素放大到110% */
}
  .card-type-no{
    margin: 10px; /* 添加上下左右的内边距为10px，或者根据需要调整 */
    padding: 5px;
    color:orange;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: orange; /* 设置橙色 */
  }
</style>