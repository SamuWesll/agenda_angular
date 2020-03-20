import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;

  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

  events: Array<any> = [
    {
      time: "08:00",
      subject: "Café da manhã com Simon",
      location: "Lounge Caffe",
      description: "Discutir metas do terceiro trimestre"
    },
    {
      time: '12:00',
      subject: 'Almoço com Timothy',
      location: 'Cantina',
      description: 'O arquivo de avaliação do projeto declarando uma variável e usando uma instrução if é uma ótima maneira de renderizar condicionalmente um componente, às vezes você pode querer usar um'
    },
  ];

  deleteEvent(event: any) {
    const itemIndex = this.events.findIndex(el => el === event);
    this.events.splice(itemIndex, 1);
  };

  addNewEvent() {
    const newEvent: any = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value
    };
  
    this.events.push(newEvent);
  
    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');
  
    this.modal.hide();
  }

}
