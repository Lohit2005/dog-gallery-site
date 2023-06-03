import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DogGalleryComponent } from './dog-gallery.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogStub } from 'src/app/unit-testing/mat-dialog.stub';
import { DogService } from 'src/app/services/dog-gallery.service';
import { DogServiceStub } from 'src/app/unit-testing/dog-gallery-service.stub';

describe('DogGalleryComponent', () => {
  let component: DogGalleryComponent;
  let fixture: ComponentFixture<DogGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [DogGalleryComponent],
      providers: [
        { provide: MatDialog, useClass: MatDialogStub },
        { provide: DogService, useClass: DogServiceStub },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogGalleryComponent);
    component = fixture.componentInstance;
    component.loadedImageCnt = -1;
    (component as any).dogService.breedNames = [];
    component.onBreedClick({
      breedName: '',
      image: '',
      subBreeds: [],
    });
    component.onImageLoad();
    component.onFilterSearch('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
