import React from 'react';
import { connect } from 'react-redux';
import {selectDirectorySections } from '../redux/directory/director.selectors';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../components/menu-item/menu-item.component.jsx'
import './directory.component.styles.scss';

const Directory = ({ sections}) => (
   <div className = 'directory-menu'>
    {sections.map(({id, ...Otherprops}) => (
        <MenuItem key = {id} {...Otherprops} />
       ))}
</div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);