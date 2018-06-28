import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class MongoBackendService {

  apiUrl : string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getTodos(){
    return this.http.get(this.apiUrl+'/getTodos').pipe(
      map(res => res) // or any other operator
    );
  }

  addTodos (todo){
    return this.http.post(this.apiUrl+'/add', todo, httpOptions);
  }


  // extractData(res: Response) {
  //   let body = res.json();
  //   return body || {};
  // }
  // handleErrorObservable (error: Response | any) {
  //   console.error(error.message || error);
  //   return Observable.throw(error.message || error);
  // }

}

//
// @Injectable()
// export class NumberDetails {
//
//   mobile: number;
//
//   constructor(private http: HttpClient) { }
//
//   getDetails() {
//     if (this.mobile) {
//
//       return this.http.get('https://numspy.pythonanywhere.com/LocateMobile/' + this.mobile) .pipe(
//         map(res => res) // or any other operator
//       );
//     }
//   }
//
// }
//
//
//















