import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { TaskService } from './app/tasks/tasks.service';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// export const TasksServiceToken = new InjectionToken<TasksService>(
//   'tasks-service-token'
// );

// bootstrapApplication(AppComponent, {
//   providers: [{ provide: TasksServiceToken, useClass: TasksService }],
// }).catch((err) => console.error(err));