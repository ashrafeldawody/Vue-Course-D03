<template>
  <div class="container">
    <div class="books d-flex flex-wrap">
      <Book v-for="book in $store.state.books" :key="book.id" :book = "book.id"></Book>
    </div>
  </div>
</template>

<script>
import Book from './BookComponent.vue'
export default {
  data:()=>({
    
  }),
  components:{
    Book
  }
}
</script>