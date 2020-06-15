import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Overtreding } from '../_models/overtreding';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {
  apiUrl = environment.apiUrl;
  data: any[];

  constructor(private http: HttpClient) { }

  getOvertredingen() {
    return this.http.get<Overtreding[]>(this.apiUrl);
  }

  showData() {
    const data = [{value: 50, name: 'Snelheid'}];

    this.getOvertredingen().subscribe((res: Overtreding[]) => {
      data.push({value: 50, name: 'Snelheid'});
    });

    return data;
  }
}
