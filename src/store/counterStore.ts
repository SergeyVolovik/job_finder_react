import { combineReducers, createStore } from 'redux';

const initialFavoritesState = {
  favorites: 0
};
const initialNotificationMessagesState = {
  messages: 0
};

const counterFavoritesReducer = (
  state = initialFavoritesState,
  action: any
) => {
  switch (action.type) {
    case 'INCREMENT_FAVORITE':
      return { favorites: state.favorites + 1 };
    case 'DECREMENT_FAVORITE':
      return { favorites: state.favorites - 1 };
    default:
      return state;
  }
};

const counterNotificationMessagesReducer = (
  state = initialNotificationMessagesState,
  action: any
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { messages: state.messages + 1 };
    case 'DECREMENT':
      return { messages: state.messages - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterFavorites: counterFavoritesReducer,
  counterNotificationMessages: counterNotificationMessagesReducer
});

export const counterStore = createStore(rootReducer);
