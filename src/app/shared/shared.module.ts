import { NgModule } from "@angular/core";

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations:[
       
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumsComponent
    ],
    imports:[
        PipesModule,
        RouterModule,
        CommonModule
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
        BreadcrumsComponent
    ]
})
export class sharedModule{}