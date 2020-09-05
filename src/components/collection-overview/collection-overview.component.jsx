import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionsPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collection-overview.styles.scss';

const CollectionOverview  = ({collections}) => (
    <div className = 'collection-overview'>
    {
        collections.map(({id, ...otherCollections}) => (
            <CollectionPreview key ={id} {...otherCollections} />
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
collections: selectCollectionsPreview
})

export default connect(mapStateToProps)(CollectionOverview);