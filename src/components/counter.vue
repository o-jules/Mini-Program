<template>
<view class="counter">
    <button @tap="plus" size="mini"> + </button>
    <button @tap="minus" size="mini"> - </button>
    <text class="count" :class="{ red: isTooLarge, green: num < 45 }"> {{num}} </text>
</view>
</template>

<script lang="typescript">
import wepy from 'wepy'

interface Data {
    num: number
}

interface Computed {
    isTooLarge: boolean
}

export default class Counter extends wepy.component<{}, Data, Computed> {
    data: Data = {
        num: 50,
    }

    computed = {
        isTooLarge: () => {
            if (this.num > 55) {
                return true
            }
            return false
        }
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
