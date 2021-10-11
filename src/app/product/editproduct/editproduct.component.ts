import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from "c:/xampp/htdocs/Angular/frontend/src/app/product/product.module";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
  
    constructor(private service: ProductService,private fb: FormBuilder,private http: HttpClient) { }

    ngOnInit(): void {
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
    
      update(){
        if(!this.name.value || !this.description.value || !this.price.value){
          this.showError = true;
          return;
        }
        
        this.selectedProduct.name = this.name.value;
        this.selectedProduct.description = this.description.value;
        this.selectedProduct.price = this.price.value;
        this.service.add(this.selectedProduct) .subscribe(response => this.products = response);
    
      }
    
      reset(){
        this.name.reset();
        this.description.reset();
        this.price.reset();
      }
    
    }
    