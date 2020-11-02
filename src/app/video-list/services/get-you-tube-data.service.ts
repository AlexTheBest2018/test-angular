import { Injectable } from '@angular/core';
import { AppConstants } from '../../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetYouTubeDataService {

  private readonly api_key: string;

  constructor(private http: HttpClient) {
    this.api_key = AppConstants.apiKey;
  }

  getYouTubeList() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=${this.api_key}&maxResults=50&type=video&part=snippet&q=john`);
  }
}
