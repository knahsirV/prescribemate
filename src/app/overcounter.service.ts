import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OvercounterService {

    constructor(private http: HttpClient) {}

    fetchMeds(): Observable<Object> {
        return this.http.get('https://api.fda.gov/drug/drugsfda.json?search=products.marketing_status:%22Over-the-counter%22&limit=50');
    }

    fetchSearchMeds(): Observable<Object> {
        return this.http.get('https://api.fda.gov/drug/drugsfda.json?search=products.marketing_status:%22Over-the-counter%22&limit=5');
    }

    fetchPresMeds(): Observable<Object> {
        return this.http.get('https://api.fda.gov/drug/drugsfda.json?' +
        'search=(products.brand_name:simvastatin+propranolol+citalopram)' +
        '+AND+(products.marketing_status:%22Prescription%22)&limit=50');
    }
}
