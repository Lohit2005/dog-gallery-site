import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogGalleryComponent } from './components/dog-gallery/dog-gallery.component';

const routes: Routes = [
  { path: '', redirectTo: 'dog-gallery', pathMatch: 'full' },
  {
    path: 'dog-gallery',
    component: DogGalleryComponent,
  },
  { path: '**', redirectTo: 'dog-gallery', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
