import wepy from 'wepy'
import Counter from 'components/counter/index'

interface Data {
    name: string
}

export default class Main extends wepy.page<Data> {

    config: WxWindowConfig = {
        navigationBarTitleText: '',
    }

    components = {
        'counter': Counter,
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
