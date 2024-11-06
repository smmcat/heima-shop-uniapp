import type { AddressItem } from "@/types/address";
import { defineStore } from "pinia";
import { ref } from "vue";


// 本地存储默认收获地址
export const userAddressStore = defineStore('address', () => {
    const selectedAddress = ref<AddressItem>()
    const changeSelectedAddress = (val: AddressItem) => {
        selectedAddress.value = val
    }
    return {
        selectedAddress,
        changeSelectedAddress
    }
})