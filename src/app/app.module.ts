import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';

import { HttpLink } from 'apollo-angular/http';

import { InMemoryCache } from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { NavbarComponent } from './auth/components/navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { FooterComponent } from './auth/components/footer/footer.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './auth/components/admin/admin.component';
import { UserComponent } from './auth/components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ListingComponent,
    ListingDetailsComponent,
    FooterComponent,
    MainComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            //replace your graphql url http://localhost:3000/graphql
            uri: 'http://localhost:5000/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  exports: [LoginComponent, RegisterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
