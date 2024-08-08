import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  param : any;
  queryParam: any;
  ngOnInit(): void {
      console.log(this.activatedRoute);
      this.param=this.activatedRoute.snapshot.params['username'];
      this.queryParam=this.activatedRoute.snapshot.queryParams['course'];
      this.service.getAllProductsWithLimit().subscribe({
        next:(data)=>{
          console.log(data);
        }
      });
      const product:ProductRepresentation={
        title:'camisa',
        description:'nueva paquete',
        price: 12,
        category:'cualquiera',
        image:'http://nueva.com'
      };
      
      this.service.createProduct(product).subscribe(
        {
          next: (result)=>{
            console.log(result);
          }, 
          error: (error:HttpErrorResponse)=>{
            console.log(error);
            if(error instanceof ErrorEvent){
              console.error('an error ocurred:'+error);
              
            }else {
              console.error('status:'+error.status+' an error ocurred:'+error.error.message);
            }
          }
        }
      );
  }
  constructor(private activatedRoute:ActivatedRoute, private service:ProductService){

  }
}
