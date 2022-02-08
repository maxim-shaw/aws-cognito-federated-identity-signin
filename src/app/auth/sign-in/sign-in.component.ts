import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  orderby: string = '';
  isLoading: boolean = false;
  email_address: string = "";
  password: string = "";
  //Authentication string
  //https://man-c4s.auth.eu-central-1.amazoncognito.com/login?client_id=2croiod073n8kmtbrpv877591l&response_type=code&scope=email+openid&redirect_uri=http://localhost:4200/auth/sign-in

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.orderby = params['orderby'];
      console.log(this.orderby); // price
    });
   }

  ngOnInit(): void {
  }

  onSignIn(form: NgForm){
    if (form.valid) {
      this.httpClient.get('https://man-c4s.auth.eu-central-1.amazoncognito.com/login?client_id=2croiod073n8kmtbrpv877591l&response_type=code&scope=email+openid&redirect_uri=http://localhost:4200/auth/sign-in')
        .subscribe(res => {
          let status = res;
        });
    }


      // this.isLoading = true;
      // let authenticationDetails = new AuthenticationDetails({
      //     Username: this.email_address,
      //     Password: this.password
      // });
      // let poolData = {
      //   UserPoolId: environment.cognitoUserPoolId, // Your user pool id here
      //   ClientId: environment.cognitoAppClientId // Your client id here
      // };

      // let userPool = new CognitoUserPool(poolData);
      // let userData = { Username: this.email_address, Pool: userPool };
      // var cognitoUser = new CognitoUser(userData);
      // cognitoUser.authenticateUser(authenticationDetails, {
      //   onSuccess: (result) => {
      //     this.router.navigate(["dashboard"])
      //   },
      //   onFailure: (err) => {
      //     alert(err.message || JSON.stringify(err));
      //     this.isLoading = false;
      //   }
      // });
  }

}
