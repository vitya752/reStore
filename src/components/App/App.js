import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
    HomePage,
    CartPage
} from './../pages';
import ShopHeader from './../ShopHeader/ShopHeader';
import { connect } from 'react-redux';

const App = ({ numItems, total }) => {
    return(
        <main className="container" role="main">
            <ShopHeader numItems={numItems} total={total} />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        numItems: state.shoppingCart.cartItems.length,
        total: state.shoppingCart.orderTotal
    }
}

export default connect(mapStateToProps)(App);