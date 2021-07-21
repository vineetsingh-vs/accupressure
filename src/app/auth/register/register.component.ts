import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreHttpService } from '@core/services/http/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: CoreHttpService) { }

  public error: boolean;

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
          localStorage.setItem('registeredUsers', JSON.stringify(user));
        }
      });
    } else {
      this.error = true;
    }
  }

  ngOnInit(): void {
  }

}
