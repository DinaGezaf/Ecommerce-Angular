import { ViewAdminComponent } from './Components/view-admin/view-admin.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './Components/customers/customers.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/details', component: ProductlistComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'view', component: ViewAdminComponent },
  { path: 'view/home', component: DashboardComponent },
  { path: 'adminlogin', component: LoginAdminComponent },
  { path: 'userlogin', component: LoginUserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'addProduct/new', component: AddProductComponent },
  { path: 'addProduct/:id', component: AddProductComponent },
  { path: 'editProduct', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
