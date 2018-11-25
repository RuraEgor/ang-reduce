import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {IAppState} from "./redux/app.state";
import {Store} from "@ngrx/store";
import {Car} from "./car.model";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/toPromise";

@Injectable()
export class CarsService {

  static BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: Http, private store: Store<IAppState>) {}

  // loadCars(): void {
  //   this.http.get(CarsService.BASE_URL + 'cars')
  //     .map((response: Response) => response.json())
  //     .toPromise()
  //     .then((cars: Car[]) => {
  //       this.store.dispatch(new LoadCars(cars))
  //     })
  // }

  loadCars(): any {
    // this.http.get(CarsService.BASE_URL + 'cars');
    return this.http.get('http://localhost:3000/cars');
  }
}
