import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoversorPageRoutingModule } from './coversor-routing.module';

import { CoversorPage } from './coversor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CoversorPageRoutingModule
  ],
  declarations: [CoversorPage]
})
export class CoversorPageModule {}
