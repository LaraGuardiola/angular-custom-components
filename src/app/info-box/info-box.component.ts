import { Component, OnInit, Input } from '@angular/core';
import { faCommentDollar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() icon: IconDefinition
  @Input() firstText: string
  @Input() secondText: string

  constructor() { 
    this.icon = faCommentDollar
    this.firstText = '¿Sabes por qué nuestros clientes eligen BankReady?'
    this.secondText = '<u>Te lo explicamos aquí abajo</u>'
  }

  ngOnInit(): void {
  }

}
