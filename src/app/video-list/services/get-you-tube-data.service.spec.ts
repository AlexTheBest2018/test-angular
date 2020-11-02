// import {inject, TestBed} from '@angular/core/testing';
//
// import { GetYouTubeDataService } from './get-you-tube-data.service';
// import { HttpClient } from '@angular/common/http';
// import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
//
// describe('GetYouTubeDataService', () => {
//   let service: GetYouTubeDataService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(GetYouTubeDataService);
//   });
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [GetYouTubeDataService],
//       imports: [
//         HttpClientTestingModule
//       ],
//     });
//   });
//
//   it('expects service to fetch data with proper sorting',
//     inject([HttpTestingController, GetYouTubeDataService],
//       (httpMock: HttpTestingController, service: GetYouTubeDataService) => {
//         // We call the service
//         service.getYouTubeList().subscribe(data => {
//           expect(data.pageInfo.totalRecordCount).toBe(21);
//           expect(data.pageInfo.pageNumber).toBe(0);
//           expect(data.data.length).toBe(7);
//         });
//         // We set the expectations for the HttpClient mock
//         const req = httpMock.expectOne('http://.../data/contacts');
//         expect(req.request.method).toEqual('GET');
//         // Then we set the fake data to be returned by the mock
//         req.flush({data: ...});
//       })
//   );
//
// });
