import { LightningElement,api } from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class QuickCaseCreationFornEdit extends LightningElement 
{
    @api recordId;
    handleSuccess(event)
    {
        const evt = new ShowToastEvent({ 
        title: "Case  Created",
        message: "Case is Successfully Created!",
        variant: "success"
        });
        this.dispatchEvent(evt);
        eval("$A.get('e.force:refreshView').fire();");
    }

    handleReset(event)
    {
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if(inputfields)
        {
            inputfields.forEach(field => {
                if(field.getAttribute('data-name')!='contactid')
                {
                    field.reset();
                }
            });
        }
    }

}