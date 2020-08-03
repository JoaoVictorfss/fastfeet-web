import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Orders from '~/pages/Orders';
import OrderForm from '~/pages/Orders/OrderForm';
import Deliverymen from '~/pages/Deliverymen';
import DeliverymanForm from '~/pages/Deliverymen/DeliverymanForm';
import Recipients from '~/pages/Recipients';
import RecipientForm from '~/pages/Recipients/RecipientForm';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/orders" component={Orders} isPrivate />
      <Route path="/orders/edit/:id" component={OrderForm} isPrivate />
      <Route path="/orders/register" component={OrderForm} isPrivate />

      <Route exact path="/deliverymen" component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/edit/:id"
        component={DeliverymanForm}
        isPrivate
      />
      <Route
        path="/deliverymen/register"
        component={DeliverymanForm}
        isPrivate
      />

      <Route exact path="/recipients" component={Recipients} isPrivate />
      <Route path="/recipients/edit/:id" component={RecipientForm} isPrivate />
      <Route path="/recipients/register" component={RecipientForm} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
