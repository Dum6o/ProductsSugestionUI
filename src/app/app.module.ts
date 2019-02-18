import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule, MatSlideToggleModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
