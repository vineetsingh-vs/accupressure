import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreHttpService } from '@core/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: CoreHttpService) { }

  public error: boolean;

  form: FormGroup = new FormGroup({
    emailId: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  submit() {
    this.error = false;
    if (this.form.valid) {
      this.http.postData('/authent/login', this.form.value).toPromise().then((user) => {
      });
    } else {
      this.error = true;
    }
  }


  ngOnInit(): void {
  }
}
