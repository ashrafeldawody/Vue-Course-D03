<template>
  <div
    :class="[
      'card m-2 border',
      book.pages < 50 ? 'border-danger' : 'border-success',
    ]"
    style="width: 30%; min-width: 300px"
  >
    <img
      :src="getPic(book.image)"
      style="max-height: 260px"
      class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title text-center">{{ book.name }}</h5>
      <p>Category: {{ book.category }}</p>
      <p>Author: {{ book.author }}</p>
      <p>Pages: #{{ book.pages }}</p>
      <p>Price: {{ book.price }}</p>
      <p>ISBN: {{ book.ISBN }}</p>
      <p>In Stock: {{ book.instock }}</p>
    </div>
    <div class="card-footer">
      <button
        class="btn btn-success float-end"
        :disabled="checkExist(book.id)"
        @click="addToWishList(book)"
      >
        Add to Wishlist
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props:['book']
}
</script>