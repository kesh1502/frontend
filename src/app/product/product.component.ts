import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from './product.module';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product = [] as any;
  public selectedProduct = <IProduct>{};
  public btnTitle = '';
  public name = new FormControl('',Validators.required);
  public description = new FormControl('',Validators.required);
  public price = new FormControl('',Validators.required);
  public showError = false;

  constructor(private service:ProductService,) { }



  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.list()
      .subscribe(response => this.product = response);
  }

  delete(product:IProduct){
    this.service.delete(product)
      .subscribe(response => this.getList());
  }

  save(){
    if(!this.name.value || !this.description.value || !this.price.value){
      this.showError = true;
      return;
    }

    this.selectedProduct.name = this.name.value;
    this.selectedProduct.description = this.description.value;
    this.selectedProduct.price = this.price.value;

    if(this.btnTitle == 'Update'){
      this.service.update(this.selectedProduct)
        .subscribe(response=>{
          this.getList();
          this.reset();
          this.showError = false;
        });
    }else{
      this.service.add(this.selectedProduct)
        .subscribe(response=>{
          this.getList();
          this.reset();
          this.showError = false;
        });
    }
  }

  reset(){
    this.name.reset();
    this.description.reset();
    this.price.reset();
  }

}
