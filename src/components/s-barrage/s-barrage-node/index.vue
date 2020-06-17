<template>
  <transition name="s-barrage-fade" @after-leave="handleAfterLeave" v-on:leave="leave">
    <div ref="node" v-show="visible" class="s-barrage-node" :style="nodeStyle" @mouseenter="stop" @mouseleave="run" @click="click">
      {{text}}
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      // 文字
      text: '',
      // 类型
      type: 'success',
      // 是否可见
      visible: true,
      // 宽度
      width: '',
      // 高度
      top: '',
      // 点击回调
      callBack: ''
    }
  },
  computed: {
    // 计算弹幕位置
    nodeStyle () {
      return {
        left: '0px',
        top: `${this.top}px`
      }
    }
  },
  mounted () {
    // 弹幕挂载后立即进入消失动画
    this.visible = false
  },
  methods: {
    // 动画完成后删除虚拟DOM以及真实DOM
    handleAfterLeave () {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
    // 弹幕离开动画
    leave: function (el, done) {
      this.Velocity(el, { left: `${this.width}px` }, { easing: 'linear', duration: 10000, complete: done })
    },
    // 鼠标停留暂停
    stop () {
      this.Velocity(this.$refs.node, 'pause')
    },
    // 鼠标离开启动
    run () {
      this.Velocity(this.$refs.node, 'resume')
    },
    // 点击触发回调
    click () {
      this.callBack(this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
.s-barrage-node{
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  cursor: pointer;
}
</style>
