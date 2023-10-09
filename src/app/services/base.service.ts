import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getData(target: string) {
    return this.http.get(this.url + target)
  }
  newAnimal(body: any) {
    if (body.id!=undefined) {
      return this.http.put(this.url + 'allatok/' + body.id, body)
    }
    return this.http.post(this.url + 'allatok/', body)
  }
  deleteAnimal(id: any) {
    return this.http.delete(this.url + "allatok/" + id)
  }
  getAnimal(id: any) {
    return this.http.get(this.url + "allatok/" + id)
  }
}
