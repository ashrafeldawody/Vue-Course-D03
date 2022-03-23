<template>
  <nav class="navbar navbar-light bg-light align-items-baseline">
    <div class="container-fluid">
      <router-link href="#" class="navbar-brand" to="books">Books</router-link>
      <form class="d-flex align-items-baseline">
        <p>
          Wishlist Books: {{ bookStore.getWishListCount() }} Book{{
            bookStore.getWishListCount() != 1 ? "s" : ""
          }}
          | Total: {{ bookStore.getTotalPrice() }}
        </p>
        <router-link class="btn btn-outline-success mx-2" to="cart"
          >WishList</router-link
        >
      </form>
    </div>
  </nav>
</template>
<script>
import { useBookStore } from '@/store/index'

export default {
  data:()=>({
      bookStore: null
  }),

  beforeMount(){
    this.bookStore = useBookStore();
  }
};
</script>