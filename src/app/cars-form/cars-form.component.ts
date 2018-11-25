import {Component, OnInit} from "@angular/core";
import {Car} from "../car.model";
import * as moment from "moment";
import {Store} from "@ngrx/store";
import {IAppState} from "../redux/app.state";
import {AddCar, LoadCars} from "../redux/cars.action";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {

  private id: number = 2;

  carName: string = '';
  carModel: string = '';

  constructor(private store: Store<IAppState>, private service: CarsService) {
  }

  onAdd() {
    if (this.carModel === '' || this.carName === '') return;

    this.id = ++this.id;

    const carNew = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    )

    this.store.dispatch(new AddCar(carNew));

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    // this.service.loadCars().subscribe( data => console.log( 'fffffffff', JSON.parse(data) ) );
    this.service.loadCars().subscribe( data => this.store.dispatch(new LoadCars(JSON.parse(data._body))) );
  }

}
