import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export class ContactForm {
  constructor() {}

  public name: string;
  public email: string;
  public phoneNumber: string;
  public message: string;
  public antiSpam: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  model = new ContactForm();

  ngOnInit() {}

  onSubmit() {
    this.http
      .post<ContactForm>(
        'https://prod-04.uksouth.logic.azure.com:443/workflows/e1c01b33912e4f8ca729072313637c50/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FGB7H-Jou3seTn__qlfPEjOqim_n_KD_z2Rw8kIbWfo',
        this.model,
        httpOptions
      )
      .subscribe();

    return this.router.navigate(['/contact-submitted']);
  }
}
