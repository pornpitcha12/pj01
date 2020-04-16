import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-find-barcode',
  templateUrl: './find-barcode.component.html',
  styleUrls: ['./find-barcode.component.css']
})
export class FindBarcodeComponent implements OnInit {
  barcode: string;
  bar: any;

  constructor(private activatedroute: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  findBarcode() {
    this.http.get('http://localhost:3000/product/'+this.barcode).subscribe((res: any) => {
      console.log(res)
      this.bar = res[0];
    })
  }

  ngOnInit() {
  }
}
