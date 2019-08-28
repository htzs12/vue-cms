<template>

  <div>
    <!-- 这是轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <h1>啊啊啊</h1>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
      background: pink;
    }
    }
  }
</style>
