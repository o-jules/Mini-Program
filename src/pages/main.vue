<template lang="jade">
view.container
  counter
</template>

<script lang="typescript">
import wepy from 'wepy'
import { WxWindowConfig } from 'wepy/config'
import Counter from 'components/counter.vue'

interface Data {
    name: string
}

export default class Main extends wepy.page<Data> {
    config: WxWindowConfig = {
        navigationBarTitleText: '',
    }

    components = {
        'counter': Counter
    }

    data = {
        name: '',
    }

    computed = {}

    methods = {}

    constructor() {
        super()
    }
}
</script>
