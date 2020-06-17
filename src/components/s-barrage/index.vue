<template>
  <div class="s-barrage" :style="barStyle">

  </div>
</template>

<script>
import Vue from 'vue'
import Node from './s-barrage-node/index'
const NodeConstructor = Vue.extend(Node)

export default {
  props: {
    // 宽度
    width: {
      type: Number,
      default: 500
    },
    // 行数
    col: {
      type: Number,
      default: 3
    },
    // 行高
    colHeigth: {
      type: Number,
      default: 40
    },
    // 间隔
    gap: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      // 计数
      index: 0
    }
  },
  computed: {
    // 计算弹幕背景尺寸
    barStyle () {
      return {
        width: `${this.width}px`,
        height: `${this.col * (this.colHeigth + this.gap) + this.gap}px`
      }
    }
  },
  methods: {
    // 新增弹幕
    push (options) {
      // 弹幕位置计算
      options.width = this.width
      options.top = `${this.index * (this.colHeigth + this.gap) + this.gap}`
      // 创建弹幕实例
      const instance = new NodeConstructor({
        data: options
      })
      // 弹幕挂载
      instance.$mount()
      // 弹幕挂载点为弹幕背景
      this.$el.appendChild(instance.$el)
      // 计数
      if (this.index < this.col - 1) {
        this.index++
      } else {
        this.index = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.s-barrage{
  position: relative;
}
</style>
