import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoreHttpService} from '@core/services/http/http.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogComponent} from '@shared/component/dialog/dialog.component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['../auth.scss']
})
export class ResetComponent implements OnInit {

  constructor(private http: CoreHttpService, private router: Router, private dialog: MatDialog) { }

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
      this.http.postData('/authent/reset', this.form.value).toPromise().then((resp) => {
        if (resp) {
         this.openDialog();
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

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      description: 'Password reset successful'
    };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
        localStorage.setItem('user', null);
        this.router.navigate(['/']);
    });
  }
}
