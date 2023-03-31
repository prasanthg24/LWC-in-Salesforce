import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = [ 'Contact.Name','Contact.Phone']
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class QuickContactLoad_uiAPI extends LightningElement {

    @api recordId;
    contact;
    name;
    phone;

@wire(getRecord , {recordId : '$recordId',fields : FIELDS})

wiredRecord ({ error , data })
{  ;
    if(error)
    {
      let  message = 'Unknown error'
         if(Array.isArray(error.body))
         {

         }
         else if(typeof error.body.message === 'String')
         {
             message= error.body.message;

         }
         this.dispatchEvent
         (
             new ShowToastEvent ({
                 title : "Error Loading Contact",
                 message,Variant : 'error',
             }),

         );
    }
    else if ( data)
    {
        this.contact = data;
        this.name = this.contact.fields.Name.value;
        this.phone = this.contact.fields.Phone.value;
    }
}




}