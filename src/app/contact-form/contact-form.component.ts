import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  gender =[
    {id:1, name:'Male'},
    {id:2, name:'Female'},
    {id:3, name:'Other'},
  ];
  contactMethods = [
  { id:1, name:'Email'},
  { id:2, name:'Phone'},
  ];
  log(x: any): void {console.log(x);}

  submit(f: any) {
  }
}
