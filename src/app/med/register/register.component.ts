import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from '@core/services/http/http.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private http: CoreHttpService) { }

  public error: boolean;
  public dataSource: any[] = [];

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
    if (this.form.valid) {
      this.http.postData('/authent/register', this.form.value).toPromise().then((user) => {
        if (!!user) {
          this.dataSource = [...this.dataSource, user];
          localStorage.setItem('user', JSON.stringify(user));
        }
      });
    } else {
      this.error = true;
    }
  }

  ngOnInit(): void {
  }
}
