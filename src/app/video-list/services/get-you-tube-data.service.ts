import { Injectable } from '@angular/core';
import { AppConstants } from '../../config';
import { HttpClient } from '@angular/common/http';
import { RawData } from '../../shared/interfaces/data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetYouTubeDataService {

  private readonly apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = AppConstants.apiKey;
  }

  getYouTubeList(): Observable<RawData> {
    return this.http.get<RawData>(`https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&maxResults=50&type=video&part=snippet&q=john`);
  }
}
