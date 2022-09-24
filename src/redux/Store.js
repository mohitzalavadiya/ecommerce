import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootSaga } from "./saga/RootSaga";
import { RootReducer } from "./reducer/Index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga);
export let persistor = persistStore(store);

export default store;