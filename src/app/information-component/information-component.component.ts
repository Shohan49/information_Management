import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabelComponent } from './tabel/tabel.component';
import { PersonInComponent } from './person-in/person-in.component';


@Component({
  selector: 'app-information-component',
  imports: [FormsModule, TabelComponent, PersonInComponent],
  templateUrl: './information-component.component.html',
  styleUrl: './information-component.component.css'
})
export class InformationComponentComponent {
  totalDataFromChild: any;

  receivedData(data: any) {
    this.totalDataFromChild = data;
    console.log(data, 'EVent data on parrent');
  }

}
