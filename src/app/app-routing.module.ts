import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { MystockComponent } from './mystock/mystock.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { FindproductComponent } from './findproduct/findproduct.component';
import { FactoryComponent } from './factory/factory.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListorderComponent } from './listorder/listorder.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FactoryDetailComponent } from './factory-detail/factory-detail.component';
import { FindNameComponent } from './find-name/find-name.component';
import { FindImageComponent } from './find-image/find-image.component';
import { FindBarcodeComponent } from './find-barcode/find-barcode.component';
import { Mystock2Component } from './mystock2/mystock2.component';
import { AddNewproductComponent } from './add-newproduct/add-newproduct.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddFactoryComponent } from './add-factory/add-factory.component';
import { EditFactoryComponent } from './edit-factory/edit-factory.component';
import { EditProductdetailComponent } from './edit-productdetail/edit-productdetail.component';
import { EditEmployeedetailComponent } from './edit-employeedetail/edit-employeedetail.component';
import { EditFactorydetailComponent } from './edit-factorydetail/edit-factorydetail.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { MystockUserComponent } from './mystock-user/mystock-user.component';
import { Mystock2UserComponent } from './mystock2-user/mystock2-user.component';
import { AddproductUserComponent } from './addproduct-user/addproduct-user.component';
import { AddnewproductUserComponent } from './addnewproduct-user/addnewproduct-user.component';
import { EditproductUserComponent } from './editproduct-user/editproduct-user.component';
import { EditdetailproductUserComponent } from './editdetailproduct-user/editdetailproduct-user.component';
import { FindproductUserComponent } from './findproduct-user/findproduct-user.component';
import { FindImageUserComponent } from './find-image-user/find-image-user.component';
import { BillingUserComponent } from './billing-user/billing-user.component';
import { ListorderUserComponent } from './listorder-user/listorder-user.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { EditProfileUserComponent } from './edit-profile-user/edit-profile-user.component';
import { HistoryUserComponent } from './history-user/history-user.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainLayoutUserComponent } from './main-layout-user/main-layout-user.component';

const routes: Routes = [{ path: 'header', component: HeaderComponent },
  {path: 'home',
   component: MainLayoutComponent,
   children: [
     { path: '', component: HomeComponent },
   ]},   
   {path: 'mystock',
   component: MainLayoutComponent,
   children: [
     { path: '', component: MystockComponent },
   ]},
   {path: 'findproduct',
   component: MainLayoutComponent,
   children: [
     { path: '', component: FindproductComponent },
   ]},
   {path: 'factory',
   component: MainLayoutComponent,
   children: [
     { path: '', component: FactoryComponent },
   ]},
   {path: 'billing',
   component: MainLayoutComponent,
   children: [
     { path: '', component: BillingComponent },
   ]},
   {path: 'dashboard',
   component: MainLayoutComponent,
   children: [
     { path: '', component: DashboardComponent },
   ]},
   {path: 'list',
   component: MainLayoutComponent,
   children: [
     { path: '', component: ListorderComponent },
   ]},
   {path: 'employee',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EmployeeComponent },
   ]},
   {path: 'add-product',
   component: MainLayoutComponent,
   children: [
     { path: '', component: AddProductComponent },
   ]},
   {path: 'fac-detail',
   component: MainLayoutComponent,
   children: [
     { path: '', component: FactoryDetailComponent },
   ]},
   {path: 'find-name',
   component: MainLayoutComponent,
   children: [
     { path: '', component: FindNameComponent },
   ]},
   {path: 'find-image',
   component: MainLayoutComponent,
   children: [
     { path: '', component: FindImageComponent },
   ]},
   {path: 'find-barcode',
   component: MainLayoutComponent,
   children: [
     { path: '', component: FindBarcodeComponent },
   ]},
   {path: 'mystock2',
   component: MainLayoutComponent,
   children: [
     { path: '', component: Mystock2Component },
   ]},
   {path: 'add-newproduct',
   component: MainLayoutComponent,
   children: [
     { path: '', component: AddNewproductComponent },
   ]},
   {path: 'delete-product',
   component: MainLayoutComponent,
   children: [
     { path: '', component: DeleteProductComponent },
   ]},
   {path: 'edit-product',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EditProductComponent },
   ]},
   {path: 'edit-productdetail',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EditProductdetailComponent },
   ]},
   {path: 'add-employee',
   component: MainLayoutComponent,
   children: [
     { path: '', component: AddEmployeeComponent },
   ]},
   {path: 'delete-employee',
   component: MainLayoutComponent,
   children: [
     { path: '', component: DeleteEmployeeComponent },
   ]},
   {path: 'edit-employee',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EditEmployeeComponent },
   ]},
   {path: 'edit-employeedetail',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EditEmployeedetailComponent },
   ]},
   {path: 'add-factory',
   component: MainLayoutComponent,
   children: [
     { path: '', component: AddFactoryComponent },
   ]},
   {path: 'edit-factory',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EditFactoryComponent },
   ]},
   {path: 'edit-factorydetail',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EditFactorydetailComponent },
   ]},
   {path: 'edit-profile',
   component: MainLayoutComponent,
   children: [
     { path: '', component: EditProfileComponent },
   ]},
   {path: 'profile',
   component: MainLayoutComponent,
   children: [
     { path: '', component: ProfileComponent },
   ]},
   {path: 'history',
   component: MainLayoutComponent,
   children: [
     { path: '', component: HistoryComponent },
   ]},
  //  USER PAGE
  { path: 'header-user', component: HeaderUserComponent},
  {path: 'home-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: HomeUserComponent },
   ]},
   {path: 'mystock-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: MystockUserComponent },
   ]},
   {path: 'mystock2-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: Mystock2UserComponent },
   ]},
   {path: 'addproduct-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: AddproductUserComponent },
   ]},
   {path: 'addnewproduct-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: AddnewproductUserComponent },
   ]},
   {path: 'editproduct-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: EditproductUserComponent },
   ]},
   {path: 'editdetailproduct-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: EditdetailproductUserComponent },
   ]},
   {path: 'findproduct-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: FindproductUserComponent },
   ]},
   {path: 'findimage-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: FindImageUserComponent },
   ]},
   {path: 'billing-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: BillingUserComponent },
   ]},
   {path: 'listorder-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: ListorderUserComponent },
   ]},
   {path: 'profile-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: ProfileUserComponent },
   ]},
   {path: 'edit-profile-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: EditProfileUserComponent },
   ]},
   {path: 'history-user',
   component: MainLayoutUserComponent,
   children: [
     { path: '', component: HistoryUserComponent },
   ]},
{ path: 'login', component: LoginComponent },
{ path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{ path: '**', component: PagenofoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
