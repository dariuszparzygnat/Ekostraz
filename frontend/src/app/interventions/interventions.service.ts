import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { PostInterventionData, ClientIntervention, FormInterventionData, RawServerIntervention } from './types';
import { Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { map, switchMap, catchError, delay } from 'rxjs/operators';
import { getFakeData } from '../fakedata';

const BASE_API_URL = 'https://devkodawanie.azurewebsites.net/api/';
const AddPublicFormUrl = BASE_API_URL + 'AddPublicForm';
const AddPrivateFormUrl = BASE_API_URL + 'PrivateForm';
const GetAllRequestsUrl = BASE_API_URL + 'GetAllRequestsFunction';
const DeleteRequestUrl = BASE_API_URL + 'DeleteRequestFunction';
const GetOneRequestsUrl = BASE_API_URL + 'GetOneRequestsFunction';


const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class InterventionsService {
  constructor(
      private http: HttpClient,
      private router: Router,
      private snackBar: MatSnackBar,
  ) { }

  getInterventions(): Observable<ClientIntervention[]> {
    // return this.http.get<any>(GetAllRequestsUrl)
    //   .pipe(map(data => data.map(item => new PostInterventionData(item))));
    return of(getFakeData().map(item => new ClientIntervention(item))).pipe(
        delay(2000),
        catchError(this.handleError.bind(this)),
    );
  }

  private postForm(formData: FormInterventionData, interventionId: string, APIUrl: string): Subscription {
    return this.http.post(APIUrl, new PostInterventionData(formData, interventionId), HTTP_OPTIONS)
        .subscribe({
          next: this.onPostSuccess.bind(this),
          error: this.onPostError.bind(this)
        });
  }

  postPublicForm(formData: FormInterventionData): Subscription {
    return this.postForm(formData, null, AddPublicFormUrl);
  }

  postPrivateForm(formData: FormInterventionData, id: string | null): Subscription {
    return this.postForm(formData, id, AddPrivateFormUrl);
  }

  delete(id: string, phone: string) {
    return this.http.post(DeleteRequestUrl, {partitionKey: id, rowKey: phone}, HTTP_OPTIONS);
  }

  getIntervention(routeParams: Observable<Params> ): Observable<ClientIntervention | null> {
    // TODO: Patch window.history when using Angular Universal.
    const intervention = window.history.state && window.history.state.intervention as ClientIntervention;
    return intervention ? of(intervention) : this.getActiveRouteIntervention(routeParams).pipe(
        catchError(this.handleError.bind(this))
    );
  }

  private handleError(e) {
    this.openSnackBar('Ups! Przepraszamy, coś poszło nie tak!', 'OK');
    return of(null);
  }

  private getActiveRouteIntervention(routeParams: Observable<Params>): Observable<ClientIntervention | null> {
    return routeParams.pipe(
        switchMap(params => params.interventionId ?
            this.fetchIntervention(params.interventionId as string) :
            of(null)
        )
    );
  }

  fetchIntervention(id: string): Observable<ClientIntervention> {
    return this.http.post<RawServerIntervention>(GetOneRequestsUrl, { id }).pipe(
      map(rawIntervention => new ClientIntervention(rawIntervention))
    );
  }

  private onPostSuccess() {
    const snackBarRef = this.openSnackBar('Twoje zgłoszenie zostało przyjęte!', 'OK!');
    snackBarRef.afterDismissed().subscribe(() => {
      this.router.navigateByUrl('');
    });
  }

  private onPostError() {
    this.openSnackBar('Niestety, nie udało się przyjąć Twojego zgłoszenia!', 'Zamknij');
  }

  private openSnackBar(message: string, action: string) {
    return this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }
}
