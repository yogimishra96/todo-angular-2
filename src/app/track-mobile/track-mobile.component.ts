import { Component, OnInit } from '@angular/core';
// import {s} from '@angular/core/src/render3';
import {NumberDetails} from '../todo/store.service';

@Component({
  selector: 'track-mobile-cmp',
  templateUrl: './track-mobile.component.html',
  styleUrls: ['./track-mobile.component.css']
})
export class TrackMobileComponent implements OnInit {

  newcomponent = "Entered in new component created";
  mobileNumber: number ;
  mobile: string = '8824179288' ;
  provider: string =  'Jio';
  state: string = 'rajsthan';

  // apiData ;

  constructor(private apiData: NumberDetails) {

  }

  ngOnInit() {
   // console.log(this.apiData);
     this.getDetails();

  }

  getDetails(){
      this.apiData.getDetails()
     .subscribe((data => console.log(data)) );
  }

}
