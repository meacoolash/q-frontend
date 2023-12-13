import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../../types/person.type';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PersonListService {

  public personListComplete$ = new BehaviorSubject<Person[]>([]);
  private apiService = inject(ApiService);

  public fetchPersonList() {
    this.apiService.get('/api/v1/contacts').subscribe(res => {
      this.personListComplete$.next(res.contacts);
    });
  }

}