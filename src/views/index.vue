<template>
  <div class="index">
    <s-barrage id="bar" ref="bar" :width="1000"></s-barrage>
  </div>
</template>

<script>
import sBarrage from '../components/s-barrage/index'
export default {
  components: {
    sBarrage
  },
  mounted () {
    setInterval(() => {
      this.$refs.bar.push({
        text: '弹幕',
        callBack: (val) => {
          console.log(val)
        }
      })
    }, 2000)
    setInterval(() => {
      this.$refs.bar.push({
        text: '弹幕',
        direction: 'right',
        callBack: (val) => {
          console.log(val)
        }
      })
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.index{
  width: 100%;
  .s-barrage{
    margin: 0 auto;
  }
}
</style>
