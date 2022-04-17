import { createStore, action } from "easy-peasy";

const store = createStore({
  user: [],
  // users: [],
  // search: [],
  
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  // setUsers: action((state, payload) => {
  //   state.users = payload;
  // }),
  // setSearch: action((state, payload) => {
  //   state.Search = payload;
  // }),
});

export default store;