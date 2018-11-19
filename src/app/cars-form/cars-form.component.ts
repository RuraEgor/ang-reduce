import {Component, OnInit} from "@angular/core";
import {Car} from "../car.model";
import * as moment from "moment";
import {Store} from "@ngrx/store";
import {IAppState} from "../redux/app.state";
import {AddCar} from "../redux/cars.action";

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent {

  private id: number = 2;

  carName: string = '';
  carModel: string = '';

  constructor(private store: Store<IAppState>) {
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
    // todo
  }


}
