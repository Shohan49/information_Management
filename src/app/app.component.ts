import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InformationComponentComponent } from './information-component/information-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponent } from './footer/footer.component';
import { TabelComponent } from './information-component/tabel/tabel.component';

@Component({
  selector: 'app-root',
  imports: [InformationComponentComponent , NavbarComponentComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'informtion_managment';
}
