<template>
         <div class="overlay" @click="closeSlider"></div>
</template>
<script>
export default {
        methods:{
                closeSlider(){
                        this.$store.dispatch('showActiveSlide',false)
                }
        }
}
</script>
<style scoped lang="scss">
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 125vh;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
}
</style>