
import wepy from 'wepy'
import Counter from 'components/counter/index'


export default class Main extends wepy.page<{}> {

    config = {
        navigationBarTitleText: 'test'
    }

    components = {
        Counter
    }

    data = {}

    computed = {}

    methods = {}
}
