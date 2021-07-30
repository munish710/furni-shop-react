import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, gridView: true };
    case SET_LISTVIEW:
      return { ...state, gridView: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filteredProducts: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let temporaryProducts = [...allProducts];
      if (text) {
        temporaryProducts = temporaryProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      if (category !== "all") {
        temporaryProducts = temporaryProducts.filter((product) => {
          return product.category === category;
        });
      }

      if (company !== "all") {
        temporaryProducts = temporaryProducts.filter((product) => {
          return product.company === company;
        });
      }

      if (color !== "all") {
        temporaryProducts = temporaryProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      //price
      temporaryProducts = temporaryProducts.filter(
        (product) => product.price <= price
      );

      if (shipping) {
        temporaryProducts = temporaryProducts.filter(
          (product) => product.shipping === true
        );
      }

      return { ...state, filteredProducts: temporaryProducts };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.maxPrice,
          shipping: false,
        },
      };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
