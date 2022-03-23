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
        <tr v-for="item in wishlist" :key="item.book.id">
          <th>{{ item.book.id }}</th>
          <td>{{ item.book.name }}</td>
          <td>{{ item.book.author }}</td>
          <td>
            {{ item.quantity }}
            <button
              class="btn btn-success"
              :disabled="!canIncrement(item)"
              @click="addToWishList(item.book)"
            >
              +
            </button>
            |
            <button class="btn btn-danger" @click="decreaseQty(item)">-</button>
          </td>
          <td>{{ formatMoney(item.book.price) }}</td>
          <td>{{ formatMoney(item.quantity * item.book.price) }}</td>
        </tr>

        <tr>
          <th colspan="3">Total Price:</th>
          <th colspan="3">{{ formatMoney(getTotalPrice()) }}</th>
        </tr>
        <tr>
          <th colspan="3"></th>
          <th colspan="3">
            <button class="btn btn-primary" @click="cashout">CashOut</button>
          </th>
        </tr>
      </tbody>
    </table>
</template>