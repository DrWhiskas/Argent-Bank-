import { createStore } from "redux";
import login from "../reducers/login.reducer";

const store = createStore(login)

export default store
