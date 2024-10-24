import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
  // 获取猜你喜欢组件
  const guessRef = ref<XtxGuessInstance>()
  // 监听滚动触底回调
  const onScrolltolower = () => {
    // 加载更多
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
