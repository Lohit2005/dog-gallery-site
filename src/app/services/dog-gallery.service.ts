import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Breed } from '../interfaces/breed-gallery';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DogService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private apiUrl = 'https://dog.ceo/api';
  gotAllBreedsflag = false;
  breedNames: string[] = [];
  breedInfo: Breed[] = [];
 
  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<any>{
    let API_URL = `${this.apiUrl}/breeds/list/all`;
    return this.http.get(API_URL);
  }
  
  getBreedImage(breed: string, count=1): Observable<any>{
    let API_URL = `${this.apiUrl}/breed/${breed}/images/random/${count}`;
    return this.http.get(API_URL);
  }

}
