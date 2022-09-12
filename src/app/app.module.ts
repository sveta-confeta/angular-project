import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import {FormsModule} from "@angular/forms";
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import {AngularInputFocusModule} from "angular-input-focus";
import { StyleComponent } from './directives/style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoItemComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    PostFormComponent,
    PostComponent,
    StyleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularInputFocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
