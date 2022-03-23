<template>
        <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Book Name</th>
          <th scope="col">Author</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in bookStore.wishlist" :key="item.book.id">
          <th>{{ item.book.id }}</th>
          <td>{{ item.book.name }}</td>
          <td>{{ item.book.author }}</td>
          <td>
            {{ item.quantity }}
            <button
              class="btn btn-success"
              :disabled="!bookStore.canIncrement(item)"
              @click="bookStore.addToWishList(item.book)"
            >
              +
            </button>
            |
            <button class="btn btn-danger" @click="bookStore.decreaseQty(item)">-</button>
          </td>
          <td>{{ bookStore.formatMoney(item.book.price) }}</td>
          <td>{{ bookStore.formatMoney(item.quantity * item.book.price) }}</td>
        </tr>

        <tr>
          <th colspan="3">Total Price:</th>
          <th colspan="3">{{ bookStore.getTotalPrice() }}</th>
        </tr>
        <tr>
          <th colspan="3"></th>
          <th colspan="3">
            <button class="btn btn-primary" @click="bookStore.cashout()">CashOut</button>
          </th>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { useBookStore } from '@/store/index'

export default {
  data: () => ({
    bookStore: null
  }),
  beforeMount() {
    this.bookStore = useBookStore();
  }, 
}

</script>