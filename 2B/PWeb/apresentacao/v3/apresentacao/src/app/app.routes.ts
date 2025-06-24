import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeaturesComponent } from './features/features.component';
import { SobreComponent } from './sobre/sobre.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'sac',
    component: FaleConoscoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}