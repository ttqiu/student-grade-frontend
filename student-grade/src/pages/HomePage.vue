<template>
  <div class="background">
<img class="logoimage" src="../images/hedge.png" alt="hedgehoglogo">
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
  .background{
    display: flex;
    justify-content: center;
    background-color: aquamarine;
    height: 85vh;
    width: 95vw;
    margin: auto;
    margin-top: 80px;
  }
  .logoimage{
    height: 700px;
    width: 700px;
  }
</style>
