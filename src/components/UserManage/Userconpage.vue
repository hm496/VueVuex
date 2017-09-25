<template>
    <div :class="$style.suerpage">
        <iPage :total="100" show-elevator></iPage>
    </div>
</template>
<script>
import iPage from 'iviewSrc/page';
export default {
    name: '',
    componentName: '',
    components: {
        iPage,
    },
    props: {},
    data: function() {
        return {}
    },
    created() {
    },
    methods: {},
    computed: {},
    watch: {},
}
</script>
<style lang="scss" module>
.suerpage {
    width: 100%;
    height: 7%;
    border: 1px solid #ccc; // border-top: none 0;
    padding-top: 15px;
    padding-left: 10px;
}
</style>
