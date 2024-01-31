import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginMostrarComponent } from './component/login/login-mostrar/login-mostrar.component';
import { IndexaComponent } from './component/indexa/indexa.component';
export const routes: Routes = [

  {
    path: '',
    component: IndexaComponent
  },
  {
    path:'home',
    component: IndexaComponent
  },
  {
    path: 'login',
     component: LoginComponent
  },
  {
    path:'footer',
    component:FooterComponent
  }

];
