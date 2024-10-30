<template>
    <div class="container">
        <div class="auxBar">
            <AuxBar />
        </div>
        <div class="main-content-container">
            <div class="menu">
                <MenuSideBar />
            </div>
            <div class="main-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    import AuxBar from '@/components/AuxBar.vue';
    import MenuSideBar from '@/components/MenuSideBar.vue';
</script>
  
<style scoped>
</style>
  