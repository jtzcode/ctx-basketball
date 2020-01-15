import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    MatDividerModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: []
})
export class BClubMaterialModule { }
