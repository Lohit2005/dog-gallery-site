import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

const modules = [MatCardModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
