import { Component } from '@angular/core';
import {categories} from '../categories';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categories = [...categories];


  share(link: string) {
    window.open('https://t.me/share/url?url='+link);
  }

  onNotify() {
    window.alert('You will be notified when the product');
  }

  del_but(){
    const hideButton = document.getElementById('hideButton');
    const elementToHide = document.getElementById('elementToHide');

    if (hideButton && elementToHide) {
      hideButton.addEventListener('click', () => {
    
        elementToHide.style.display = 'none';
      });
    }
  }
  del_button(pro: Product, pro1:Product[]){
    const i = pro1.findIndex(p=> p.id === pro.id)
    if(i !==-1){
      pro1.splice(i,1);
    }
  }
}   


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/