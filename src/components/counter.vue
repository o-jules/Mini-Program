<template>
<view class="counter">
    <button @tap="plus" size="mini"> + </button>
    <button @tap="minus" size="mini"> - </button>
    <text class="count" :class="{ red: num > 55, green: num < 45 }"> {{num}} </text>
</view>
</template>

<script lang="typescript">
import wepy from 'wepy'

export default class Counter extends wepy.component<{ num: number }> {
    data = {
        num: 50,
    }

    computed = {
    }

    methods = {
        plus: () => {
            this.num ++
        },
        minus: () => {
            this.num --
        },
    }

}
</script>

<style lang="scss">
.counter {
    text-align: left;
    font-size: 12px;
  }
  .count {
    font-size: 18px;
    font-weight: bold;
    &.red {
      color: red;
    }
    &.green {
      color: green;
    }
  }
</style>
