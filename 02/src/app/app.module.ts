import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, TasksModule, SharedModule],
})
export class AppModule {}