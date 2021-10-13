import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from "c:/xampp/htdocs/Angular/frontend/src/app/product/product.module";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

    public products = [] as any;
    public selectedProduct = <IProduct>{};
    public modalTitle = '';
    public btnTitle = '';
    public name = new FormControl('',Validators.required);
    public description = new FormControl('',Validators.required);
    public price = new FormControl('',Validators.required);
    public showError = false;
    loggedIn: boolean= true ;
  
    constructor(private service: ProductService,private userService: UserService,private fb: FormBuilder,private http: HttpClient) { }

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
        this.service.add(this.selectedProduct) .subscribe(response => this.products = response);
        
    
      }
    
      reset(){
        this.name.reset();
        this.description.reset();
        this.price.reset();
      }
    
    }
    