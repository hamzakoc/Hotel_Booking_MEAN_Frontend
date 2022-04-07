import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  listing: any = [];

  constructor(private apolloClient: Apollo, private dataService: DataService) {}

  ngOnInit(): void {
    this.apolloClient
      .watchQuery<any>({
        query: this.dataService.GET_LISTING,
      })
      .valueChanges.subscribe((response) => {
        console.log(response.data.getListing);
        this.listing = response.data.getListing;
      });
  }
}
