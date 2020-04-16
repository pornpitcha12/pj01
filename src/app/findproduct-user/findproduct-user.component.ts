import { Component, OnInit } from '@angular/core';
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
  selector: 'app-findproduct-user',
  templateUrl: './findproduct-user.component.html',
  styleUrls: ['./findproduct-user.component.css']
})
export class FindproductUserComponent implements OnInit {
  email: string;
  searchProduct: String;
  product: any;

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) { }

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

  findProduct() {
    this.http.get('http://localhost:3000/product/'+this.searchProduct).subscribe((res: any) => {
      console.log(res)
      this.product = res[0];
    })
  }

  ngOnInit() {
  }

}
