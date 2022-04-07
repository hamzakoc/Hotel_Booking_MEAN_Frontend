import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit {
  listingDetails: any = [];
  constructor(
    private apolloClient: Apollo,
    private dataService: DataService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apolloClient
      .watchQuery<any>({
        query: this.dataService.GET_LISTING_BY_ID,
        variables: {
          id: this.router.snapshot.params['id'], //Replace with your own values read from textbox
          //title: 'Your title' //Replace with your own values read from textbox
        },
      })
      .valueChanges.subscribe((response) => {
        console.log('get listing by City');
        console.log(response.data.getListingByID);
        this.listingDetails = response.data.getListingByID;
      });
  }
}
