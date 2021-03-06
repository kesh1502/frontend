import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from "c:/xampp/htdocs/Angular/frontend/src/app/product/product.module";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
 
  public products = [] as any;
  public selectedProduct = <IProduct>{};
  public modalTitle = '';
  public btnTitle = '';
  public name = new FormControl('',Validators.required);
  public description = new FormControl('',Validators.required);
  public price = new FormControl('',Validators.required);
  public showError = false;
 
  loggedIn: boolean=true;
  modalService: any;
  
  constructor(private service: ProductService,private userService: UserService,private fb: FormBuilder,private http: HttpClient) { }

  openModal(product?:IProduct) {
    if(product){
      this.modalTitle = 'Edit Product';
      this.btnTitle = 'Update';
      this.selectedProduct = product;
      this.name.setValue(product.name);
      this.description.setValue(product.description);
      this.price.setValue(product.price);
  } 
}

  ngOnInit(): void {
    
    this.userService.isUserLoggedIn().subscribe(
      status => this.loggedIn = status
    );
    console.log('isLogged', this.loggedIn);
    this.getList();
      
  }

  getList(){
    this.service.list()
      .subscribe(response => this.products = response);
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
    }
  }

  reset(){
    this.name.reset();
    this.description.reset();
    this.price.reset();
  }

}