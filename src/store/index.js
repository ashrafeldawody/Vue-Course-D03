import { createStore } from 'vuex'

export default createStore({
    state: {
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
    },
    mutations: {

    },
    actions: {
      formatMoney(value) {
        return new Intl.NumberFormat("ar-SA", {
          style: "currency",
          currency: "SAR",
        }).format(value);
      },
      async getTotalPrice(store) {
        let total = 0;
        for (let item of store.state.wishlist) {
          total += item.quantity * item.book.price;
        }
        return total;
      },
      async getWishListCount(store) {
        return store.state.wishlist.length;
      },
      addToWishList(store,book) {
        let found = store.state.wishlist.findIndex((el) => el.book.id == book.id);
        if (found == -1) {
          store.state.wishlist.push({
            book: book,
            quantity: 1,
          });
          book.instock--;
        } else {
          if (book.instock > 0) {
            store.state.wishlist[found].quantity++;
            book.instock--;
          }
        }
      },
      decreaseQty(store,item) {
        if (item.quantity > 1) {
          item.quantity--;
          this.stockUp(item.book.id);
        } else if (item.quantity == 1) {
          store.state.wishlist.splice(
            store.state.wishlist.findIndex((el) => el.book.id == item.book.id),
            1
          );
          this.stockUp(item.book.id);
        }
      },
      checkExist(store,bookID) {
        return store.state.wishlist.some((IBook) => IBook.book.id == bookID);
      },
      stockUp(store,bookID, qty = 1) {
        store.state.books.find((IBook) => IBook.id == bookID).instock += qty;
      },
      stockDown(store,bookID, qty = 1) {
        if (store.books.find((IBook) => IBook.id == bookID).instock > 0)
          store.state.books.find((IBook) => IBook.id == bookID).instock -= qty;
      },
  
      canIncrement(store,wishlistElement) {
        let bookQty = store.state.books.find(
          (IBook) => IBook.id == wishlistElement.book.id
        ).instock;
        return bookQty > 0;
      },
  
      cashout(store) {
        let conf = window.confirm("Are you sure you want to checkout?");
        if (conf) {
          for (let item of store.state.wishlist) {
            this.stockUp(item.book.id, item.quantity);
          }
          store.state.wishlist = [];
        }
      },
    },
    getters: {

    }
})
