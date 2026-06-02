import { Component } from '@angular/core';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { HeaderComponent } from './header/header.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServerStatusComponent,TrafficComponent,TicketsComponent,HeaderComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {


}
