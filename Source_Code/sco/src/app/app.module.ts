import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';



import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialModule } from './materials/material/material.module';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { StarComponent } from './components/star/star.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { OverviewComponent } from './components/overview/overview.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    StarComponent,
    NavBarComponent,
    HomeComponent,
    ProductDetailComponent,
    OverviewComponent,
    FooterComponent,
    CartItemsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
