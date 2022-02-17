import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Post } from '../models/post.model';
import { Priest } from '../models/priest.model';
import { SubmitPost } from '../models/submit-post.model';
import { SubmitPriest } from '../models/submit-priest.model';
import { SubmitUser } from '../models/submit-user.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly url = 'https://localhost:7132/api/';

  constructor(private readonly http: HttpClient) {}

  getUserPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'UserPost').pipe(first());
  }

  getPriests(): Observable<Priest[]> {
    return this.http.get<Priest[]>(this.url + 'UserPriest').pipe(first());
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'User').pipe(first());
  }

  login(obj: Login): Observable<string> {
    return this.http
      .post(this.url + 'Authentication', obj, { responseType: 'text' })
      .pipe(first());
  }

  getUser(username: string): Observable<User[]> {
    return this.http
      .get<User[]>(this.url + 'Authentication/' + username)
      .pipe(first());
  }

  submitPost(post: SubmitPost): Observable<unknown> {
    return this.http.post(this.url + 'Post', post).pipe(first());
  }

  submitPriest(priest: SubmitPriest): Observable<unknown> {
    return this.http.post(this.url + 'UserPriest', priest).pipe(first());
  }

  submitUser(user: SubmitUser): Observable<unknown> {
    return this.http.post(this.url + 'User', user).pipe(first());
  }

  deleteUser(userId: string): Observable<unknown> {
    return this.http.delete(this.url + 'User/' + userId).pipe(first());
  }

  deletePost(postId: string): Observable<unknown> {
    return this.http.delete(this.url + 'Post/' + postId).pipe(first());
  }

  deletePriest(priestId: string): Observable<unknown> {
    return this.http.delete(this.url + 'UserPriest/' + priestId).pipe(first());
  }
}
