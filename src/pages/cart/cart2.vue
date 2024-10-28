<script setup lang="ts">
import CartMain from './components/cartMain.vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(safeAreaInsets?.bottom);

</script>
<template>
    <CartMain :paddingBottom="safeAreaInsets?.bottom || 0" />
</template>