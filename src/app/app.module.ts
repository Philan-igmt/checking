import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './component/contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RestPasswordComponent } from './component/rest-password/rest-password.component';
import { PlattersComponent } from './component/platters/platters.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
import { RequestQuotationComponent } from './component/request-quotation/request-quotation.component';
import { CheckEmailComponent } from './component/check-email/check-email.component';
import { PlatterDetailsComponent } from './component/platter-details/platter-details.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { MakeReviewComponent } from './component/make-review/make-review.component';
import { MakeAppointmentComponent } from './component/make-appointment/make-appointment.component';
import { AppointmentListComponent } from './component/appointment-list/appointment-list.component';
import { GenerateQuoteComponent } from './component/generate-quote/generate-quote.component';
import { QuotationListComponent } from './component/quotation-list/quotation-list.component';
import { EventInfomationComponent } from './component/event-infomation/event-infomation.component';
import { EventListComponent } from './component/event-list/event-list.component';
import { AppointmentSlotComponent } from './component/appointment-slot/appointment-slot.component';
import { EventSlotComponent } from './component/event-slot/event-slot.component';
import { UserRoleComponent } from './component/user-role/user-role.component';
import { UpdateUserRoleComponent } from './component/update-user-role/update-user-role.component';
import { AddUserRoleComponent } from './component/add-user-role/add-user-role.component';
import { CustomerProfileComponent } from './component/customer-profile/customer-profile.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';
import { AddEquipmentComponent } from './component/add-equipment/add-equipment.component';
import { EquipmentListComponent } from './component/equipment-list/equipment-list.component';
import { ViewEquipmentComponent } from './component/view-equipment/view-equipment.component';
import { EquepmentTypeComponent } from './component/equepment-type/equepment-type.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatCardModule } from '@angular/material/card';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { ReactiveFormsModule } from '@angular/forms'
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import {GetPlattersService} from "./services/get-platters.service"

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    RestPasswordComponent,
    PlattersComponent,
    OrderHistoryComponent,
    RequestQuotationComponent,
    CheckEmailComponent,
    PlatterDetailsComponent,
    CartComponent,
    CheckoutComponent,
    MakeReviewComponent,
    MakeAppointmentComponent,
    AppointmentListComponent,
    GenerateQuoteComponent,
    QuotationListComponent,
    EventInfomationComponent,
    EventListComponent,
    AppointmentSlotComponent,
    EventSlotComponent,
    UserRoleComponent,
    UpdateUserRoleComponent,
    AddUserRoleComponent,
    CustomerProfileComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    AddEquipmentComponent,
    EquipmentListComponent,
    ViewEquipmentComponent,
    EquepmentTypeComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatInputModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatCardModule,
    HttpClientModule,
    
  ],
  providers: [ AuthGuard,GetPlattersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
