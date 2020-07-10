import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Post } from '../models/Post'


const httpOptions = {
  headers:  new HttpHeaders({'content-type': 'application/json'})
} 

@Injectable({
  providedIn: 'root'
})


export class PostService {


  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  addPosts(p: Post): Observable<Post>{
     return this.http.post<Post>(this.postsUrl, p, httpOptions);
  }

}
