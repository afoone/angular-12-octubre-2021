import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UnsplashService } from './unsplash.service';

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("recupera las fotos ",
   () => {
     service.getFotos("madrid").subscribe(
       (fotos) => {
         console.log(fotos)
         expect(fotos).toBeTruthy()
       }
     )
   }
  )


});
