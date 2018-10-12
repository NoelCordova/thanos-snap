import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  getCharacters():any {
    const url = 'https://gateway.marvel.com/v1/public/events/29/characters?limit=100&apikey=APIKEY';

    return this.http.get(url)
      .pipe(map((response:any) => {
        return response['data']['results'];
        /*

        Ejemplo para regresar multiples parametros

        const res = {
          status: response['status'],
          data: response['data']['results'],
        }
        return res;
        */
      }));
  }
}
