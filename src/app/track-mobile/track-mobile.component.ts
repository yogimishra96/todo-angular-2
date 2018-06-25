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
  responseData : any = {};
  showLoader  = false;


  // apiData ;

  constructor(private apiData: NumberDetails) {

  }

  ngOnInit() {

  }

  getDetails(){
    if(this.mobileNumber){
      this.showLoader = true;
      // console.log('asdf');
      this.apiData.mobile = this.mobileNumber;
      // this.getDataFromService();
      this.apiData.getDetails()
        .subscribe((data) => {
            this.responseData = data;
          // console.log(this.responseData)
          this.mobile = this.responseData.data.Mobile
          this.provider = this.responseData.data.Provider
          this.state = this.responseData.data.State
          this.showLoader = false;
        });

    }
  }

  // getDataFromService(){

  // }

}
