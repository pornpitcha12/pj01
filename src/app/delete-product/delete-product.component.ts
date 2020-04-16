import { Component, OnInit } from '@angular/core';
import { DeleteProductService } from './delete-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent{

  constructor(public dialogService: DeleteProductService) { }


  // openModal() {
  //   var data = null; //call api
  //   this.dialogService.openModal("Title1","Message Test", ()=>{
  //     //confirmed
  //     console.log('Yes');
  //   }, ()=>{
  //     //not confirmed
  //     console.log('No');
  //   });

  // }
}
