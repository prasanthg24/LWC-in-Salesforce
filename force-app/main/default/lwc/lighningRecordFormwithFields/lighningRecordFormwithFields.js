import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
import Name_field from '@salesforce/schema/Account.Name';
import Type_field from '@salesforce/schema/Account.Type';
import Industry_field from '@salesforce/schema/Account.Industry';
import Phone_field  from '@salesforce/schema/Account.Phone';
export default class LighningRecordFormwithFields extends NavigationMixin(LightningElement)
{
    accountfields = [Name_field,Type_field,Industry_field,Phone_field];
    handleSuccess(event)
    {
        const evt = new ShowToastEvent({ 
        title: "Account Created",
        message: "Record Id -"+event.detail.id,
        variant: "success"
        });
        this.dispatchEvent(evt);

        this[NavigationMixin.Navigate]({
   
             type: 'standard__recordPage',
            attributes:{
                recordId : event.detail.id,
                objectApiName:'Account',
                actionName : 'view'
            },
       
    });
    }

}