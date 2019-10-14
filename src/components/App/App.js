import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
    HomePage,
    CartPage,
    BookPage
} from './../pages';
import ShopHeader from './../ShopHeader/ShopHeader';
import { connect } from 'react-redux';

const App = ({ numItems, total }) => {
    return(
        <main className="container" role="main">
            <ShopHeader numItems={numItems} total={total} />
            <Switch>
                <Route path="/reStore/" component={HomePage} exact />
                <Route path="/reStore/cart" component={CartPage} />
                <Route path="/reStore/:id" render={({match}) => {
                    const { id } = match.params;
                    return <BookPage bookId={id} />
                }} />
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