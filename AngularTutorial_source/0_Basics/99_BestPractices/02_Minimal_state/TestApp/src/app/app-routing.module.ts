import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./containers/products/products-container.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/products",
    pathMatch: "full"
  },
  { path: "products", component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
