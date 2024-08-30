import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  items:any;
  searchQuery: string = '';
  constructor(private ms:MyserviceService){}
  ngOnInit(): void {
    this.loadData();
  }

  performSearch(val:any): void {
    

    if (val.trim()) {
      this.GetSpecificData(val);
    }
  }

  loadData(): void {
    this.ms.getData('https://fakestoreapi.com/products').subscribe(data => {
      this.items = data;
    });
  }

  GetSpecificData(categories:any){
    this.ms.getData(`https://fakestoreapi.com/products/category/${categories}`).subscribe(data => {
      this.items = data;
    });
  }
}
