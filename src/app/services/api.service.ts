import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError } from 'rxjs'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  private baseUrl = `${environment.apiUrl}`

  public get(url: string): Observable<any> {
    console.log('get', url);
    return this.http.get(this.baseUrl + url)
    .pipe(
      catchError((error) => {console.log(error); return error})
    );
  }

  public post(url: string, body: object): Observable<any> {
    return this.http.post(this.baseUrl + url, body)
      .pipe(
        catchError((error) => {console.log(error); return error})
      )
  }
}
