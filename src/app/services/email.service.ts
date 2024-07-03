import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private urlApi = 'https://email-send-node.vercel.app/api/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(email: string, message: string): Observable<any> {
    const emailData = { email, message };
    return this.http.post(this.urlApi, emailData);
  }
}
