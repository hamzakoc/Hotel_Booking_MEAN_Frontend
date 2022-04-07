import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public GET_USER = gql`
    {
      getUser {
        id
        username
        firstname
        lastname
        email
        password
        token
      }
    }
  `;

  public GET_LISTING = gql`
    {
      getListing {
        id
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_BOOKING = gql`
    {
      getBooking {
        listing_id
        booking_id
        booking_date
        booking_start
        booking_end
        username
      }
    }
  `;

  public GET_LISTING_CREATED_BY_ADMIN = gql`
    query getListingCreatedByAdmin($type: String!) {
      getListingCreatedByAdmin(type: $type) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_LISTIN_BY_NAME = gql`
    query getListingByName($listing_title: String!) {
      getListingByName(listing_title: $listing_title) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_LISTING_BY_CITY = gql`
    query getListingByCity($city: String!) {
      getListingByCity(city: $city) {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
        type
        created
        token
      }
    }
  `;

  public GET_LISTING_BY_ID = gql`
    query getListingByID($id: ID!) {
      getListingByID(id: $id) {
        id
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
        type
        created
        token
      }
    }
  `;

  //   public GET_USER_BY_ID = gql`
  // {

  // }
  // `;
  //   public GET_LISTING_BY_ID = gql`
  // {

  // }
  // `;
  //   public GET_BOOKING_BY_ID = gql`
  // {

  // }
  // `;

  //   public USER_LOGGED_IN_BOOKING = gql`
  // {

  // }
  // `;
  //   public ADMIN_LOGGED_IN_LISTING = gql`
  // {

  // }
  // `;

  public UPVOTE_POST = gql`
    mutation UpvotePost {
      upvotePost(postId: 12) {
        id
        votes
      }
    }
  `;

  public GET_POSTS_OF_AUTHOR = gql`
    query GetPostsOfAuthor($authorId: Int!) {
      postsOf(authorId: $authorId) {
        id
        title
      }
    }
  `;
}
