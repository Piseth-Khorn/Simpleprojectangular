import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './components/blank/blank.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [BlankComponent, LoginComponent],
  imports: [
    FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        CommonModule,
        AppRoutingModule,
  ]
})
export class BlankModule { }
