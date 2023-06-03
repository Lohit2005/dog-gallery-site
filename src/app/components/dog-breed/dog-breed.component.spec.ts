import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { DogService } from 'src/app/services/dog-gallery.service';
import { DogServiceStub } from 'src/app/unit-testing/dog-gallery-service.stub';

import { DogBreedComponent } from './dog-breed.component';

describe('DogBreedComponent', () => {
  let component: DogBreedComponent;
  let fixture: ComponentFixture<DogBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule],
      declarations: [DogBreedComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: DogService, useClass: DogServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogBreedComponent);
    component = fixture.componentInstance;
    component.breed = { breedName: '', image: '', subBreeds: ['', ''] };
    component.subBreedsInfo = [];
    component.breedImages = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
