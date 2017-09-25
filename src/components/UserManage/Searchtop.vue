<template>
    <div :class="$style.searchContainer">
        <div :class="$style.searchleft">
            <iSelect style="width:150px">
                <iOption v-for="item in searchList" :value="item.value" :key="item.value">{{ item.label }}</iOption>
            </iSelect>
            <iButton type="primary" icon="ios-search">查询</iButton>
        </div>
        <div :class="$style.searchright">
            <iButtonGroup>
                <iButton type="ghost" icon="ios-plus-empty">新增</iButton>
                <iButton type="ghost" icon="ios-compose-outline">修改</iButton>
                <iButton type="ghost" icon="ios-trash-outline">删除</iButton>
                <iButton type="ghost" icon="ios-paper-outline">查看</iButton>

            </iButtonGroup>
        </div>
    </div>
</template>
<script>
import iButton from 'iviewSrc/button';
const iButtonGroup = iButton.Group;
import iIcon from 'iviewSrc/icon';
import iModal from 'iviewSrc/modal';
import {
    Select as iSelect,
    Option as iOption,
} from 'iviewSrc/select';
export default {
    name: '',
    componentName: '',
    components: {
        iButton,
        iButtonGroup,
        iSelect,
        iOption,
        iIcon,
        iModal,
    },
    props: {},
    data: function() {
        return {
            searchList: [
                {
                    value: 'beijing',
                    label: '姓名'
                },
                {
                    value: 'shanghai',
                    label: '电话'
                },
                {
                    value: 'shenzhen',
                    label: '性别'
                }
            ],
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
.searchContainer {
    width: 100%;
    height: 8%;
    border: 1px solid #ccc;
    overflow: hidden;
    padding-top: 15px;
}

.searchleft {
    float: left;
    margin-left: 10px;
    height: 8%; // padding-top: 20px;
}

.searchright {
    float: right;
    margin-right: 10px;
    height: 8%; // padding-top: 20px;
    // font-size: 14px !important;
}
</style>

