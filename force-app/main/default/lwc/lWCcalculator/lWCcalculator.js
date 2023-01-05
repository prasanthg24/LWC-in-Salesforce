import { LightningElement } from 'lwc';
    export default class LWCcalculator extends LightningElement
    {
        Input1;
        Input2;
        result;
    handleClick(event)
        {
            const calculator = event.target.name;
            if(calculator == 'Add')
            {
            this.result = parseInt(this.Input1)+parseInt(this.Input2);
            }
            else if(calculator == 'Subtract')
            {
             this.result = parseInt(this.Input1)-parseInt(this.Input2);
            }
           else if(calculator == 'Multiple')
            {
             this.result = parseInt(this.Input1)*parseInt(this.Input2);
            }
            else if(calculator == 'Division')
            {
             this.result = parseInt(this.Input1)/parseInt(this.Input2);
            }
         
        }

    handleChange(event)
    {
        const targetName = event.target.name;
        if(targetName == "Input1")
        {
            this.Input1 = event.target.value;
        }
        else if(targetName =="Input2")
        {
             this.Input2 = event.target.value;
        }
    }


    }