import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreHttpService } from '@core/services/http/http.service';
import { Router } from '@angular/router';
import {EncryptionService} from '@core/services/encryption.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: CoreHttpService, private router: Router, private encryptionService: EncryptionService) { }

  public errorMessage: string;

  form: FormGroup = new FormGroup({
    emailId: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  submit() {
    this.errorMessage = null;
    if (this.form.valid) {
      const encryptedPassword = this.encryptionService.encrypt(this.form.value.password);
      this.form.patchValue({...this.form.value, password: encryptedPassword});
      this.http.postData('/authent/login', this.form.value).toPromise().then((emailId) => {
        if (!!emailId) {
          localStorage.setItem('user', JSON.stringify(emailId));
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid Credentials!';
        }
      });
    } else {
      this.errorMessage = 'Invalid Credentials!';
    }
  }


  ngOnInit(): void {
  }
}
