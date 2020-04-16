import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';
import { MatDialog} from '@angular/material/dialog';
import { MatDialogRef} from '@angular/material/dialog/dialog-ref';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface DialogData {
  email: string;
}

@Component({
  selector: 'app-webcam-user',
  templateUrl: './find-image-user.component.html',
  styleUrls: [ './find-image-user.component.css' ]
})
export class FindImageUserComponent implements OnInit  {
   // tslint:disable-next-line: variable-name
   product_name: string;
   email: string;
   title = 'project';
   product = '';

  public seconds: number ;
   private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    // tslint:disable-next-line: no-console
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });

}

}
