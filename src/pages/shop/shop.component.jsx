import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './shop-page.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
     state = {
         loading: true
     }
    unsbscripeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot( async snapshot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }
    render() {
        const { loading } = this.state
        const { match } = this.props;
        return (
            <div className = 'shop-page'>
            <Route exact path = {`${match.path}`} render = {(props) => <CollectionOverviewWithSpinner isLoading = {loading} {...props}/>} />
            <Route exact path = {`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading = {loading} {...props}/>}  />
            </div>
        )

    }
}

const matchToDispatchProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, matchToDispatchProps)(ShopPage);