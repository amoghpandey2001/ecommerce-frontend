import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Order from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";

// console.log(Product);
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute path="/admin/orders" exact component={Order} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
