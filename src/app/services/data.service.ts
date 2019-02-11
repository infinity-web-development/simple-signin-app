import { Injectable,  } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  profileLookup;
  
    constructor(private _http: Http) {

     }

    getAllPosts() {
      return this._http.get("/api/get-all-products")
        .map(result => {


          return result.json();
        });
    }

    getAllUsers() {
      return this._http.get("/api/get-all-users")
        .map(result => {
          return result.json();
        });
    }

    getUser(id) {
      return this._http.get('/api/user/'+id)
      .map(result => {
        return result.json();
      });
    }

    updateUser(id, updateObj) {
      return this._http.put('/api/user/'+id, updateObj)
      .map(result => {
        return result.json();
      });
    }
    
    addPost(productObj) {
      return this._http.post("/api/add-post", productObj)
      .map(result => {
        return result.json();
      })
    }

    getUserPosts(id) {
      return this._http.get('/api/user-product/'+id)
      .map(result => {
        return result.json();
      });
    }

}
