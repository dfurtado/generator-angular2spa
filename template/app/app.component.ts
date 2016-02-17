import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

import {Home} from './pages/home.component'
import {About} from './pages/about.component'
import {Contact} from './pages/contact.component'

@Component({
    selector: 'my-app',
    template: `
         <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> 
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" [routerLink]="['Home']">ANGULAR 2 APP</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a [routerLink]="['Home']">Home</a></li>
                    <li><a [routerLink]="['About']">About</a></li>
                    <li><a [routerLink]="['Contact']">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="starter-template">
                <router-outlet></router-outlet>
            </div>
        </div>    
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([    
  { path:'/',            name: 'Home',       component: Home },
  { path:'/about',       name: 'About',      component: About },
  { path:'/contact',     name: 'Contact',    component: Contact }  
])

export class AppComponent { }