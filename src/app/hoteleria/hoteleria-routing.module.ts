import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from "./pages/detalle/detalle.component";
import { HomeComponent } from "./pages/home/home.component";

const routesChildren: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'detalle/:id',
                component: DetalleComponent
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(routesChildren)
    ],
    exports: [
        RouterModule
    ]
})
export class HoteleriaRoutingModule { }