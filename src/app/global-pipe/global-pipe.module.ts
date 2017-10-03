import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderByPipe} from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderByPipe],
  providers: [OrderByPipe],
  exports: [OrderByPipe]
})
export class GlobalPipeModule { }
