import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Types

export type Item = {
  id?: number;
  cardIndex?: number;
  image: string;
  title: string;
  oldPrice?: number;
  price: number;
  reference: 'un';
};

interface ActionType {
  type: string;
  payload: ItemAddPayloadType | ItemRemovePayloadType;
}

export interface StateType {
  nextId: number;
  items: Item[];
  total: number;
}

export type ItemAddPayloadType = Item;

export type ItemRemovePayloadType = Item;

// Actions

export const ITEM_ADD = 'CART/ITEM_ADD';
export const ITEM_REMOVE = 'CART/ITEM_REMOVE';
export const CLEAR = 'CART/CLEAR';

// Reducer

const INITIAL_STATE: StateType = {
  nextId: 0,
  items: [],
  total: 0,
};

const reducer = (state = INITIAL_STATE, action: ActionType | AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ITEM_ADD:
      return {
        items: [...state.items, { ...action.payload, cardIndex: state.nextId }],
        total: state.total + action.payload.price,
        nextId: state.nextId + 1,
      };
    case ITEM_REMOVE:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.cardIndex !== action.payload.cardIndex
        ),
        total: state.total - action.payload.price,
      };
    case CLEAR:
      return INITIAL_STATE;
    default:
      return { ...state };
  }
};

const persistConfig = {
  key: 'cart',
  storage,
};

export default persistReducer(persistConfig, reducer);

// Action Creators

export const itemAdd = (payload: ItemAddPayloadType) => ({
  type: ITEM_ADD,
  payload,
});

export const itemRemove = (payload: ItemRemovePayloadType) => ({
  type: ITEM_REMOVE,
  payload,
});

export const clear = () => ({
  type: CLEAR,
});
