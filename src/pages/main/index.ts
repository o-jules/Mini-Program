import wepy from 'wepy'
import Counter from 'components/counter/index'

export default class Main extends wepy.page<{ name: string }> {

    config = {
        navigationBarTitleText: ''
    }

    components = {
        Counter
    }

    data = {
        name: '',
    }

    computed = {}

    methods = {}

    constructor() {
        super()

        getApp().getUserInfo(info => {
            // TODO:
            // something with user info
        })
    }

}
