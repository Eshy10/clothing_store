import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import shopReducer from './shop/shop.reducer'
import directoryReducer from './directory/directory.reduer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducers)