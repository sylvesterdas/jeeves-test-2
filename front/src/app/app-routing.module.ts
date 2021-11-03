import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: "", component: ListingComponent },
  { path: "add-property", component: AddPropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
