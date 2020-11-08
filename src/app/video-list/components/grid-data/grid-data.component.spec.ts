import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { GridDataComponent } from './grid-data.component';
import {GetYouTubeDataService} from '../../services/get-you-tube-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
// import {ChangeDetectionStrategy} from '@angular/core';

describe('GridDataComponent', () => {
  let component: GridDataComponent;
  let fixture: ComponentFixture<GridDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ GridDataComponent ],
      providers: [ GetYouTubeDataService ]
    })
      // .overrideComponent(GridDataComponent, {
      //   set: { changeDetection: ChangeDetectionStrategy.Default }
      // })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call specific method during ngOnInit', () => {
    // @ts-ignore
    const serviceMethodSpy = spyOn(component.GetYouTubeDataService, 'getYouTubeList').and.callThrough();
    component.ngOnInit();
    expect(serviceMethodSpy).toHaveBeenCalled();
  });

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  // it('grid API is available after `detectChanges`', fakeAsync(() => {
  //   fixture.detectChanges();
  //   expect(component.gridOptions.api).toBeTruthy();
  // }));

});
