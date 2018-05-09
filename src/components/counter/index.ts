import wepy from 'wepy'

export default class Counter extends wepy.component<{ num: number }> {
    data = {
        num: 1
    }

    computed = {
        countStatus: () => {
            return { red: this.num > 55, green: this.num < 45 }
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
