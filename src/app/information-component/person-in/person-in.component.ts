import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-in',
  imports: [FormsModule],
  templateUrl: './person-in.component.html',
  styleUrl: './person-in.component.css'
})
export class PersonInComponent {
  email: string="";
  password: string="";
  firstName: string="";
  lastName: string="";
  presentAddress: string="";
  pastAddress: string="";
  idNo: number=0;
  yourAge: number=0;
  mobileNo: number=0;
  passportNo: number=0;
  isBangladeshi: boolean = false;
  @Output() totalData = new EventEmitter();
  

  onSubmit() {
    let totalData = {
      email: this.email, password: this.password, firstName: this.firstName, lastName: this.lastName, presentAddress: this.presentAddress, pastAddress: this.pastAddress, idNo: this.idNo, yourAge: this.yourAge, mobileNo: this.mobileNo, passportNo: this.passportNo, isBangladeshi: this.isBangladeshi
    }
    // console.log(totalData);
    this.totalData.emit(totalData);
    this.onRest();
  }
  onRest() {
    this.email="";
    this.password="";
    this.firstName="";
    this.lastName="";
    this.presentAddress="";
    this.pastAddress="";
    this.idNo=0;
    this.yourAge=0;
    this.mobileNo=0;
    this.passportNo=0;
    this.isBangladeshi = false;
  }


}
