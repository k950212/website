<template>
  <Navbar />
  <div class="container"></div>

  <Footer />
</template>
<script setup>
const test = 123;
</script>
<style scoped>
.container {
  width: 600px;
  height: 300px;
  background-color: red;
}
.container {
  width: 300px;
  height: 150px;
  background-color: #f0f0f0;
  border: 2px solid transparent;
  border-top: 10px solid #ddd; /* 上邊界創建凹陷 */
  border-bottom: 10px solid #ddd; /* 下邊界創建凹陷 */
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
  z-index: 1;
}
</style>
