import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreHttpService } from '@core/services/http/http.service';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private http: CoreHttpService) { }

  public error: boolean;
  public dataSource: any[] = [];
  public loading: boolean;
  public alreadyExist: boolean;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  public displayedColumns = [
    {displayName: 'Full Name', fieldName: 'fullName'},
    {displayName: 'Email Id', fieldName: 'emailId'},
    {displayName: 'Password', fieldName: 'password'},
    {displayName: 'Order Id', fieldName: 'orderId'},
  ];

  public form: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.email, Validators.required]),
    orderId: new FormControl('', Validators.required),
  });

  submit() {
    this.error = false;
    this.alreadyExist = false;
    if (this.form.valid) {
      this.loading = true;
      this.http.postData('/authent/register', this.form.value).toPromise().then((user) => {
        this.loading = false;
        if (!!user) {
          this.dataSource = [...this.dataSource, user];
          localStorage.setItem('registeredUsers', JSON.stringify(this.dataSource));
          this.form.reset();
          this.updateValidity();
        }
      }).catch((error) => {
        this.loading = false;
        const validators = this.form.validator;
        this.form.reset();
        this.updateValidity();
        this.error = true;
        this.alreadyExist = error.error.description.includes('Email Id already exist!');
      });
    } else {
      this.error = true;
    }
  }

  ngOnInit(): void {
    const registeredUsers = localStorage.getItem('registeredUsers');
    if (!!registeredUsers) {
      this.dataSource = JSON.parse(registeredUsers);
    }
  }

  public updateValidity(): void {
    setTimeout(() => this.formGroupDirective.resetForm());
  }
}
