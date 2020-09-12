import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionsPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollections = memoize(collectionUrlParams => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParams] : null
))