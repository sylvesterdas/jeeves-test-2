import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {

  properties: any[] = [];
  localities: any[] = [];

  filter = new FormGroup({
    localities: new FormControl(),
    range: new FormControl(0),
    added: new FormControl(0)
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.properties = this.dataService.properties.slice(0, 10);
    this.localities = Array.from(new Set(this.properties.map(property => property.locality)));

    this.filter.valueChanges.subscribe(this.filterChanged, console.error);
  }

  filterChanged = (filter: any) => {

    let properties = this.dataService.properties;

    if (filter.localities?.length > 0) {
      properties = properties.filter((property) => filter.localities.includes(property.locality));
    }

    if (filter.range) {
      switch(parseInt(filter.range)) {
        case 1:
          properties = properties.filter((property) => property.price <= 100000);
          break;
        case 2:
          properties = properties.filter((property) => property.price > 100000 && property.price <= 1000000);
          break;
        default:
          properties = properties.filter((property) => property.price > 1000000);
      }
    }

    this.properties = properties.slice(0, 10);
  }
}
