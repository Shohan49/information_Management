import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabel',
  imports: [],
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.css'
})
export class TabelComponent {
  @Input() totalDataFromParrent: any;
  onDelete(index: any) {
    console.log("Delete Triger", index)
    this.totalDataFromParrent.splice(index,1)
  }

}
