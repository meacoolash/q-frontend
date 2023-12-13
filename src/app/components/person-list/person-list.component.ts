import { Component, OnInit, inject } from '@angular/core';
import { Person } from '../../types/person.type';
import { CommonModule } from '@angular/common';
import { PersonListService } from './person-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit {

  private dataService = inject(PersonListService);
  private router = inject(Router);

  public list: Person[] = []
  

  ngOnInit() {
    this.dataService.personListComplete$.subscribe((personList) => {
      this.list = personList
    })
  }

  public editPerson(_id: string) {
    this.router.navigate(['person-detail', _id]);
  }
  
  public deletePerson(_id: string) {
  
  }

  public fetchPersonList() {
    this.dataService.fetchPersonList();
  }


}
    
    
