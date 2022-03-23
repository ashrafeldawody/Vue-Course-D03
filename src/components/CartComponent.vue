<template>
  <div class="checkout mt-4">
    <CartTableComponent v-if="bookStore.getWishListCount() > 0"/>
    <CartEmptyComponent v-else/>
  </div>
</template>

<script>
import CartTableComponent from './CartTableComponent.vue'
import CartEmptyComponent from './CartEmptyComponent.vue'

import { useBookStore } from '@/store/index'

export default {
  data: () => ({
    bookStore: null
  }),
  components:{
    CartTableComponent,CartEmptyComponent
  },
  beforeMount() {
    this.bookStore = useBookStore();
  },

}
</script>