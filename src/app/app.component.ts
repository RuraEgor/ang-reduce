import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {ICars} from "./car.model";
import {IAppState} from "./redux/app.state";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public carState$: Observable<ICars>

  constructor(private store: Store<IAppState>){}

  ngOnInit(): void {
    // this.store.select('carPage').subscribe(
    //   (
    //     {cars})=>{ this.cars = cars;
    //   }
    // )

    this.carState$ = this.store.select('carPage')
  }

}

