import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, NavigationStart, Router } from '@angular/router'

@Component({
  selector: 'app-mystock-user',
  templateUrl: './mystock-user.component.html',
  styleUrls: ['./mystock-user.component.css']
})
export class MystockUserComponent implements OnInit {
  products: any;
  searchProduct: any;
  searchProductName: String = '';
  constructor(private activatedroute: ActivatedRoute, private http: HttpClient, private router: Router) { 
  }

  findAllProduct() {
    this.http.get('http://localhost:3000/product').subscribe((res: any) => {
      console.log(res)
      this.products = res;
    })
  }

  findProductName() {
    // this.http.get('http://localhost:3000/product/'+this.searchProductName).subscribe((res: any) => {
    //   console.log(res)
    //   this.searchProduct = res[0];
    // })
    this.searchProduct = this.products.find(product => product.product_name == this.searchProductName);
  }

  onChangeInput() {
    this.searchProduct = null;
  }
  ngOnInit() {
    this.findAllProduct();
  }

}
