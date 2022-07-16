import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { AuthComponent } from "./pages/auth/auth.component";

const routesChildren: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registrer',
                component: RegistroComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }