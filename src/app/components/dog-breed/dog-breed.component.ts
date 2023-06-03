import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DogService } from 'src/app/services/dog-gallery.service';
import { Breed } from 'src/app/interfaces/breed-gallery';
import { SubBreed } from 'src/app/interfaces/sub-breed';

@Component({
  selector: 'app-dog-breed',
  templateUrl: './dog-breed.component.html',
  styleUrls: ['./dog-breed.component.scss'],
})
export class DogBreedComponent implements OnInit {
  breed: Breed = {};
  subBreedsInfo: SubBreed[] = [];
  breedImages: string[] = [];
  
  constructor(
    private dogService: DogService,
    @Inject(MAT_DIALOG_DATA) public data: { breed: Breed }
  ) {
    this.breed = this.data.breed;
     // console.log("breed", this.breed);
  }

  ngOnInit() {
    this.dogService
      .getBreedImage(this.breed.breedName!, 4)
      .subscribe((imgData) => {
        this.breedImages = imgData.message;
        // console.log("breedImages",this.breedImages);
      });

    for (const breedName of this.breed.subBreeds!) {
      this.dogService
        .getBreedImage(`${this.breed.breedName}/${breedName}`)
        .subscribe((imgData) => {
          this.subBreedsInfo.push({
            breedName,
            image: imgData.message,
          });
        });
    }
  }
}
