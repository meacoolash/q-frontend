import { Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'person-list', pathMatch: 'full' },
    { path: 'person-list', component: PersonListComponent },
    { path: 'person-detail/:id', component: PersonDetailComponent }, 
];
