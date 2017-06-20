var Main = {
    data() {
        return {
            formInline: {
                user: '',
                region: ''
            },
            dialogFormVisible: false,
            configDataAdd: {
                projectName: '',
                configKey: '',
                configValue: '',
                department: '',
                developer: '',
                configEnvironment: [],
            },

            // 远程搜索框数据
            options4: [],
            value9: [],
            list: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"],

            rules: {
                projectName: [
                    {required: true, message: '请输入项目名称', trigger: 'change'}
                ],
                configKey: [
                    {required: true, message: '请输入配置key', trigger: 'change'}
                ],
                configValue: [
                    {required: true, message: '请输入配置value',trigger: 'change'}
                ],
                department: [
                    {required: true, message: '请选择你所在的部门', trigger: 'change'}
                ],
                developer: [
                    {required: true, message: '请输入开发者的姓名', trigger: 'change'}
                ],
                configEnvironment: [
                    {type:'array', required: true, message: '请选择活动资源', trigger: 'change'}
                ],
                desc: [
                    {required: true, message: '请填写活动形式', trigger: 'blur'}
                ]
            }
        };
    },
    mounted() {
        this.list = this.states.map(item => {
                return { value: item, label: item };
    });
    },
    methods: {
        ready() {

        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        onSearch() {
            searchDataFromServer("submit");
        },
        onConfigAdd() {

        },
        remoteMethod(query) {
            if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                this.options4 = this.list.filter(item => {
                        return item.label.toLowerCase()
                            .indexOf(query.toLowerCase()) > -1;
            });
            }, 200);
            } else {
                this.options4 = [];
            }
        },
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')


function searchDataFromServer (arr) {
    console.log('submit!');
}


