import React from 'react';
import { Route } from 'react-router-dom';
import './shop-page.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import CollectionPage from '../collection/collection.component';

const ShopPage  = ({ match }) => (
            <div className = 'shop-page'>
            <Route exact path = {`${match.path}`} component = {CollectionOverview} />
            <Route exact path = {`${match.path}/:collectionId`} component = {CollectionPage} />
            </div>
        )


export default ShopPage;