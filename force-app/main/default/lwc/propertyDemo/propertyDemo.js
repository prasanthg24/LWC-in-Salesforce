import { LightningElement,track,api } from 'lwc';

export default class PropertyDemo extends LightningElement {
    @track message = 'Non -- reactive property';
    
     @api message1 = 'reactive property using @api decorators';
     
    handleChange(event) {
        this.message = event.target.value;
        console.log('Updated message --> ' , this.message);
    }
    handleChange2(event) {
        this.message1 = event.target.value;
        console.log('Updated message --> ' , this.message1);
    }
}