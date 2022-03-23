<template>
    <div class="books d-flex flex-wrap">
      <Book v-for="book in bookStore.books" :key="book.id" :book="book"></Book>
    </div>
</template>

<script>
import { useBookStore } from "@/store/index";

import Book from "./BookComponent.vue";
export default {
  data: () => ({
    bookStore: null
  }),
  beforeMount() {
    this.bookStore = useBookStore();
  },
  components: {
    Book
  },

};
</script>