import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';
import {WebcamModule} from 'ngx-webcam';
import {MatTableModule} from '@angular/material/table';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatMenuModule} from '@angular/material/menu';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FooterComponent } from './footer/footer.component';
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
import { DeleteProductService } from './delete-product/delete-product.service';
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
import { MainLayoutUserComponent } from './main-layout-user/main-layout-user.component';
import { AutofocusDirective } from './autofocus.directive';
import { ModalComponent } from './modal/modal.component';





const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenofoundComponent,
    MystockComponent,
    HomeUserComponent,
    FindproductComponent,
    FactoryComponent,
    BillingComponent,
    DashboardComponent,
    ListorderComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    AddProductComponent,
    FactoryDetailComponent,
    FindNameComponent,
    FindImageComponent,
    FindBarcodeComponent,
    Mystock2Component,
    AddNewproductComponent,
    DeleteProductComponent,
    EditProductComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    AddFactoryComponent,
    EditFactoryComponent,
    EditProductdetailComponent,
    EditEmployeedetailComponent,
    EditFactorydetailComponent,
    EditProfileComponent,
    HeaderUserComponent,
    MystockUserComponent,
    Mystock2UserComponent,
    AddproductUserComponent,
    AddnewproductUserComponent,
    EditproductUserComponent,
    EditdetailproductUserComponent,
    FindproductUserComponent,
    FindImageUserComponent,
    BillingUserComponent,
    ListorderUserComponent,
    ProfileComponent,
    HistoryComponent,
    ProfileUserComponent,
    EditProfileUserComponent,
    HistoryUserComponent,
    SideNavComponent,
    MainLayoutComponent,
    MainLayoutUserComponent,
    AutofocusDirective,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    WebcamModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MdePopoverModule,
    MaterialModule,
    MatCardModule

    // other imports here
  ],
  providers: [DeleteProductService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
