import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreHttpService} from '@core/services/http/http.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['../auth.scss']
})
export class ResetComponent implements OnInit {

  constructor(private http: CoreHttpService) { }

  public errorMessage: string;

  @Input() error: string | null;

  form: FormGroup = new FormGroup({
    emailId: new FormControl('', [Validators.email, Validators.required]),
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmNewPassword: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.form.valid) {
      this.http.postData('/authent/reset', this.form.value).toPromise().then((emailId) => {
        if (!!emailId) {
         console.log('Password reset successful');
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
