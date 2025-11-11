import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

import { IonApp, IonMenu, IonRouterOutlet } from '@ionic/angular/standalone';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IonApp,
    IonMenu,
    RouterOutlet,
    SidebarComponent,
  ],
})
export class AppComponent {
  showSidebar = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const route = this.getCurrentRoute(this.activatedRoute);
        this.showSidebar = route.snapshot.data['showSidebar'] ?? false;
      });
  }

  private getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) route = route.firstChild;
    return route;
  }
}