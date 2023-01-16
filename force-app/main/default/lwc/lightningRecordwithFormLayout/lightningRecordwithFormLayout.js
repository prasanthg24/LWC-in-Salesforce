import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
export default class LightningRecordwithFormLayout extends NavigationMixin(LightningElement)
{

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