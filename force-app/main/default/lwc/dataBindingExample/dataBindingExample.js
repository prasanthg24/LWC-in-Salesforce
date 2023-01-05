import { LightningElement } from 'lwc';
export default class DataBindingExample extends LightningElement {
 msg= "Welcome to LWC World"
 handleChange(event)
 {
     this.msg = event.target.value;
 }
}