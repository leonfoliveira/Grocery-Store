import { combineReducers, createStore } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import cart, { StateType as CartStateType } from './ducks/cart';

const reducers = combineReducers({
  cart,
});

export interface State {
  cart: CartStateType;
}

const makeStore: MakeStore<State> = (context: Context) => {
  const store = createStore(reducers, composeWithDevTools());
  return { ...store, persistor: persistStore(store) };
};

export const wrapper = createWrapper<State>(makeStore, { debug: true });
