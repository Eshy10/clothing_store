import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
   this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth) {
     const userRef = await createUserProfileDocument(userAuth)
     userRef.onSnapshot(snapshot => {
     setCurrentUser({
       id: snapshot.id,
       ...snapshot.data()
     })
     })
     }
     else {
       setCurrentUser(userAuth)
     }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div className = 'App'>
      <Header/>
       <Switch>
       <Route exact path = '/' component= {Homepage} />
       <Route path = '/shop' component= {ShopPage} />
       <Route path = '/signin' render = { () =>
        this.props.currentUser ?
        (<Redirect to = '/' />) :
        (< SignInAndSignUpPage/>)
        } 
        />
       </Switch>
      </div>
    );
  }

}

const matchStateProps = ({ user }) => ({
  currentUser: user.currentUser
})

const matchDispathProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(matchStateProps, matchDispathProps)(App);
