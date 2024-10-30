<template>
    <div></div>
</template>
  
<script lang="ts" setup>
    import { useAuthStore } from '@/store/authStore';
    import router from '@/router';
    const authStore = useAuthStore()
    authStore.logOut()
    router.push('/')
</script>
  
<style scoped>
</style>
  