import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabel',
  imports: [],
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.css'
})
export class TabelComponent {
  @Input() totalDataFromParrent: any;

}
