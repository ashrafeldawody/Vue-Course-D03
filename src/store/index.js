import { defineStore } from 'pinia'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [
      {
        id: 1,
        name: "عندما يعزف الشيطان",
        image: "1.jpg",
        ISBN: 2341,
        category: "Fection",
        pages: 100,
        author: "Yehia Azzam",
        price: 50,
        instock: 1,
      },
      {
        id: 2,
        name: "الخروج عن النص",
        image: "2.jpg",
        ISBN: 34553,
        category: "History",
        pages: 40,
        author: "Mohamed Taha",
        price: 80,
        instock: 4,
      },
      {
        id: 3,
        name: "لكنود",
        image: "3.jpg",
        ISBN: 21412,
        category: "Fection",
        pages: 190,
        author: "Eslam Gamal",
        price: 100,
        instock: 3,
      },
      {
        id: 4,
        name: "ورثة آل الشيخ",
        image: "4.jpg",
        ISBN: 21412,
        category: "Drama",
        pages: 170,
        author: "Ahmed Elkarmalawy",
        price: 30,
        instock: 2,
      },
      {
        id: 5,
        name: "عندما يعزف الشيطان",
        image: "1.jpg",
        ISBN: 2341,
        category: "Fection",
        pages: 100,
        author: "Yehia Azzam",
        price: 50,
        instock: 1,
      },
      {
        id: 6,
        name: "الخروج عن النص",
        image: "2.jpg",
        ISBN: 34553,
        category: "History",
        pages: 40,
        author: "Mohamed Taha",
        price: 80,
        instock: 4,
      },
      {
        id: 7,
        name: "لكنود",
        image: "3.jpg",
        ISBN: 21412,
        category: "Fection",
        pages: 190,
        author: "Eslam Gamal",
        price: 100,
        instock: 3,
      },
      {
        id: 8,
        name: "ورثة آل الشيخ",
        image: "4.jpg",
        ISBN: 21412,
        category: "Drama",
        pages: 170,
        author: "Ahmed Elkarmalawy",
        price: 30,
        instock: 2,
      },
    ],
    wishlist:[]
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    formatMoney(value) {
      return new Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency: "SAR",
      }).format(value);
    },
    getTotalPrice() {
      let total = 0;
      for (let item of this.wishlist) {
        total += item.quantity * item.book.price;
      }
      return this.formatMoney(total);
    },
     getWishListCount() {
      return this.wishlist.length;
    },
    addToWishList(book) {
      let found = this.wishlist.findIndex((el) => el.book.id == book.id);
      if (found == -1) {
        this.wishlist.push({
          book: book,
          quantity: 1,
        });
        book.instock--;
      } else {
        if (book.instock > 0) {
          this.wishlist[found].quantity++;
          book.instock--;
        }
      }
    },
    decreaseQty(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.stockUp(item.book.id);
      } else if (item.quantity == 1) {
        this.wishlist.splice(
          this.wishlist.findIndex((el) => el.book.id == item.book.id),
          1
        );
        this.stockUp(item.book.id);
      }
    },
    checkExist(bookID) {
      return this.wishlist.some((IBook) => IBook.book.id == bookID);
    },
    stockUp(bookID, qty = 1) {
      this.books.find((IBook) => IBook.id == bookID).instock += qty;
    },
    stockDown(bookID, qty = 1) {
      if (this.books.find((IBook) => IBook.id == bookID).instock > 0)
        this.books.find((IBook) => IBook.id == bookID).instock -= qty;
    },

    canIncrement(wishlistElement) {
      let bookQty = this.books.find(
        (IBook) => IBook.id == wishlistElement.book.id
      ).instock;
      return bookQty > 0;
    },

    cashout() {
      let conf = window.confirm("Are you sure you want to checkout?");
      if (conf) {
        for (let item of this.wishlist) {
          this.stockUp(item.book.id, item.quantity);
        }
        this.wishlist = [];
      }
    },
  },
})