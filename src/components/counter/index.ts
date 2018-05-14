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
