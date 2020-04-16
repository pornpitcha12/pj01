import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-find-name',
  templateUrl: './find-name.component.html',
  styleUrls: ['./find-name.component.css']
})
export class FindNameComponent implements OnInit {
  product_name: string;
  product: any;
  constructor(private activatedroute: ActivatedRoute, private http: HttpClient, private router: Router) { 
    this.product_name = this.router.getCurrentNavigation().extras.state.name;
  }

  findName() {
    console.log(this.product_name);
    this.http.get('http://localhost:3000/product/'+this.product_name).subscribe((res: any) => {
      console.log(res)
      this.product = res[0];
    })
  }

  ngOnInit() {
    this.findName();
    // this.activatedroute.data.subscribe((data: any) => {
    //   console.log(data);
    // });
  }

}
