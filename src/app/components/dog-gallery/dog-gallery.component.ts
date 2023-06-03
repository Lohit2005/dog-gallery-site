import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Breed } from 'src/app/interfaces/breed-gallery';
import { DogService } from 'src/app/services/dog-gallery.service';
import { DogBreedComponent } from '../dog-breed/dog-breed.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dog-gallery',
  templateUrl: './dog-gallery.component.html',
  styleUrls: ['./dog-gallery.component.scss'],
})
export class DogGalleryComponent {
  filteredBreedInfo: Breed[] = this.dogService.breedInfo;
  waitFlag = true;
  loadedImageCnt = 0;
  filterString = '';
  constructor(
    private dogService: DogService,
    public dialog: MatDialog,
    private router: Router,
    private location: Location
  ) {}

  onBreedClick(breed: Breed) {
    // this.router.navigate(['breed', breed]);
    this.location.replaceState(`/breed/${breed.breedName}`);
    const dialogRef = this.dialog.open(DogBreedComponent, {
      width: '500px',
      data: {
        breed,
      },
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      this.location.replaceState(`/dog-gallery`);
    });
  }

  onImageLoad() {
    this.loadedImageCnt++;
    if (this.loadedImageCnt == this.dogService.breedNames.length) {
      this.waitFlag = false;
    }
  }

  onFilterSearch(filterString: string) {
    this.filteredBreedInfo = this.dogService.breedInfo.filter((breed) => {
      console.log("BreedInfo", this.filteredBreedInfo);
      return breed.breedName?.includes(filterString);
    });
  }


}
