import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule
  ],
  declarations: []
})
export class BClubMaterialModule { }
