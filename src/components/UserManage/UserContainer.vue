<template>
    <div :class="$style.suercon">
        <iTable highlight-row :columns="columns3" :data="data1" :class="$style.userlist"></iTable>
    </div>
</template>
<script>
import iTable from 'iviewSrc/table';
export default {
    name: '',
    componentName: '',
    components: {
        iTable,
    },
    props: {},
    data: function() {
        return {
            columns3: [
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '性别',
                    key: 'sex'
                },
                {
                    title: '电话',
                    key: 'phone'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    sex: '男',
                    phone: '13388888888',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    sex: '男',
                    phone: '13388888888',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '李小红',
                    sex: '女',
                    phone: '13388888888',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '周小伟',
                    sex: '男',
                    phone: '13388888888',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '周小伟',
                    sex: '男',
                    phone: '13388888888',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '周小伟',
                    sex: '男',
                    phone: '13388888888',
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '周小伟',
                    sex: '男',
                    phone: '13388888888',
                    address: '北京市朝阳区芍药居'
                }
            ]
        }
    },
    created() {
    },
    methods: {},
    computed: {},
    watch: {},
}
</script>
<style lang="scss" module>
.suercon {
    width: 100%;
    height: 85%; // border: 1px solid #ccc;
    // border-top: none;
}

.userlist {
    border-top: none 0;
}
</style>