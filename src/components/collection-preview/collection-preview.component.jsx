import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx'
import './collection-preview.styles.scss'

const CollectionPreview = ( { title, items }) => (
<div className = 'collection-preview'>
<h1 className = 'title'>{ title.toUpperCase() }</h1>
<div className = 'preview'>
{ items.filter((_, indx) => indx < 4)
    .map(({id, ...otherItems}) => (
  <CollectionItem key ={id}  {...otherItems}/>
))}
</div>
</div>
)

export default CollectionPreview;