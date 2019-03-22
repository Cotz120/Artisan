import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formLogin : FormGroup;
  datas: any =[];
  submit=false;
  exitsSession: boolean = true;

  constructor(
    private formbuilder : FormBuilder,
    private api : ApiService,
    //public websocket: WebsocketService,
    private router: Router
  ) {
    this.formLogin = this.formbuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
    if(localStorage.getItem('session')){
      this.exitsSession = false;
    }
   }

  ngOnInit() {
    console.log("hola")
    this.sendLogin();
  }
  getLogin(){
    localStorage.removeItem("token")
    this.api.login(this.formLogin.value).subscribe(
      response => {
        // console.log("entre")
        console.log(response)
        this.datas=response.token;
        localStorage.setItem("token",this.datas)
        console.log(localStorage.getItem('token'))
        this.router.navigateByUrl("sala")
      }
    )
  }
  sendLogin(){
    this.submit=true;
    if(this.formLogin.invalid){
      return;
    }
    this.submit=false;

    console.log(this.formLogin.value.username+"--"+this.formLogin.value.password)
    this.getLogin();
  }
}
