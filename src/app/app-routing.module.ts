import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactformComponent } from './contactform/contactform.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "products" , component: ProductsComponent},
  {path: "orders", component: OrdersComponent},
  {path:"users", component:UsersComponent},
  {path:"contactform", component:ContactformComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
