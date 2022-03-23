<template>
  <nav class="navbar navbar-light bg-light align-items-baseline">
    <div class="container-fluid">
      <router-link href="#" class="navbar-brand" to="books">Books</router-link>
      <form class="d-flex align-items-baseline">
        <p>
          Wishlist Books: {{ booksCount }} Book{{
            totalPrice != 1 ? "s" : ""
          }}
          | Total: {{ totalPrice }}
        </p>
        <router-link class="btn btn-outline-success mx-2" to="cart"
          >WishList</router-link
        >
      </form>
    </div>
  </nav>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data:()=>({
      booksCount: 0,
      totalPrice: 0,
  }),
  methods: {
    ...mapActions(["getWishListCount", "getTotalPrice"]),
    getData(){
      this.getWishListCount()
        .then((data)=>{
          this.booksCount = data;
        })
      this.getTotalPrice()
        .then((data)=>{
          this.totalPrice = data;
        })
    }
  },
  beforeMount(){
    this.getData()
  }
};
</script>