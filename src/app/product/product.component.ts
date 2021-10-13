import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from './product.module';
import { FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = [] as any;
  public selectedProduct = <IProduct>{};
  public btnTitle = '';
  public name = new FormControl('',Validators.required);
  public description = new FormControl('',Validators.required);
  public price = new FormControl('',Validators.required);
  public showError = false;
  items = [];
  pageOfItems!: Array<any>;

  loggedIn: boolean=true;

  constructor(private service:ProductService,private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isUserLoggedIn().subscribe(
      status => this.loggedIn = status
    );
    console.log('isLogged', this.loggedIn);
  
    this.getList();
  }

  getList(){
    this.service.list().subscribe(response => this.products = response);
  }

  delete(product:IProduct){
    this.service.delete(product).subscribe(response => this.getList());
  }

  save(){
    if(!this.name.value || !this.description.value || !this.price.value){
      this.showError = true;
      return;
    }

    this.selectedProduct.name = this.name.value;
    this.selectedProduct.description = this.description.value;
    this.selectedProduct.price = this.price.value;
  }

  update(){
    this.service.update(this.selectedProduct)
      .subscribe(response=>{
        this.getList();
        this.reset();
        this.showError = false;
      });
  }

  reset(){
    this.name.reset();
    this.description.reset();
    this.price.reset();
  }

}
