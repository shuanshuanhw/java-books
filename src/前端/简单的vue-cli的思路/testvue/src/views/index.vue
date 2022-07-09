<template>
  <h1>Index</h1>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    // 也可以解构
    const { push, go, back } = useRouter()
  }
}
</script>