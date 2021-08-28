import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { PlattersComponent } from './component/platters/platters.component';
import { RegisterComponent } from './component/register/register.component';
import { RequestQuotationComponent } from './component/request-quotation/request-quotation.component';
import { RestPasswordComponent } from './component/rest-password/rest-password.component';
import { ServicesComponent } from './component/services/services.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'platters', component: PlattersComponent },
  { path: 'history', component: OrderHistoryComponent},
  { path: 'quote', component: RequestQuotationComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent},
  { path: 'resetpassowrd', component: RestPasswordComponent },
  { path: '**', redirectTo: '' },
  // { path: '**', component:PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
