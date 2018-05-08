
import wepy from 'wepy'

export default class Counter extends wepy.component<{ num: number }> {
    data = {
        num: 1
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
