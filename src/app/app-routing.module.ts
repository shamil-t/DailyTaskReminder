import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { ReminderComponent } from './reminder/reminder.component';
import { TasksComponent } from './tasks/tasks.component';
import { VaultComponent } from './vault/vault.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home/tasks',
    component: TasksComponent,
  },
  {
    path: 'home/notes',
    component: NotesComponent,
  },
  {
    path: 'home/reminder',
    component: ReminderComponent,
  },
  {
    path: 'home/vault',
    component: VaultComponent,
  },
  {path:"*",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
