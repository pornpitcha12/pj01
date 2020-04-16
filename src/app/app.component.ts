import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';
import { MatDialog} from '@angular/material/dialog';
import { MatDialogRef} from '@angular/material/dialog/dialog-ref';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  admins: any;
  id: string;
  name: string;
  title = 'App-work';
  barcode: '';
  constructor(private http: HttpClient) {
}

  myFunction() {
    console.log(this.barcode);
    this.http.get('http://localhost:3000/barcode/' + this.barcode).subscribe((res: any ) => {
      console.log(res);
      this.admins = res;
    });
  }


}
