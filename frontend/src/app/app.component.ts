import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


// import


@Component ({
   selector: 'app-root',
   templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit{

  redirect_login = true;
  showHeader     = true;

  constructor(private router: Router){

  }

  ngOnInit() {
    console.log('sadf');
    if(this.redirect_login){
      this.showHeader = false;
      this.router.navigate(['/app-login']);
    }else{
      this.router.navigate(['/']);
    }

  }



  redirectLogin(){

  }


}


