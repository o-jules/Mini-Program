
import wepy from 'wepy'
import Counter from 'components/counter/index'


export default class Main extends wepy.page<{ name: string }> {

    constructor() {
        super()
    }

    config = {
        navigationBarTitleText: 'test'
    }

    components = {
        Counter
    }

    data = {
        name: '',
    }

    computed = {}

    methods = {}
}
