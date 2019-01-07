import { RouterModule,Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/services.index';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { VerComponent } from './ver/ver.component';

const pagesRoutes:Routes =[
    {
    path:'', 
    component:PagesComponent,
    canActivate:[LoginGuardGuard],
    children:[
        {path:'dashboard',component:DashboardComponent,data:{titulo:'Dashboard'}},
        {path:'progress',component:ProgressComponent ,data:{titulo:'Progress'}},
        {path:'graficas1',component:Graficas1Component,data:{titulo:'Graficos'}},
        {path:'acount-settings',component:AccountSettingsComponent,data:{titulo:'Configuracion'}},
        {path:'perfil',component:PerfilComponent,data:{titulo:'Mi perfil'}},
        {path:'promesas',component:PromesasComponent,data:{titulo:'Promesas'}},
        {path:'rxjs',component:RxjsComponent,data:{titulo:'Rxjs'}},
        {path:'productos',component:ProductoComponent,data:{titulo:'Productos'}},
        {path:'producto/:id',component:VerComponent,data:{titulo:'Ver Producto'}},
        {path:'addProduct',component:AgregarProductoComponent,data:{titulo:'Agregar Producto'}},
        {path:'',redirectTo:'/dashboard',pathMatch:'full',data:{titulo:'Dashboard'}}
    ]},
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)