import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    

    height = ''
    weight = ''
    bmiVAlue = ''
    result = ''
    inputHandler(event)
    {
        const {name,value}= event.target
        if(name === "height")
        {
            this.height =   value
        }
        if(name === "weight")
        {
            this.weight = value
        }

    }
    submitHandler(event)
        {
            event.preventDefault();
           
            console.log("height = ",this.height)
            console.log("weight = ",this.weight)
            this.calculate()
        }

    calculate()
    {
        //BMI =weight in kg/height in m

        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        console.log('BMI Value is : ',bmi);
        this.bmiVAlue = Number(bmi.toFixed(2))

        if(this.bmiVAlue<18.5)
        {
            this.result ="Under Weight"
        }
        else if (this.bmiVAlue >=18.5 && this.bmiVAlue<25)
        {
            this.result = "Healthy"
        }
        else  if (this.bmiVAlue>=25 && this.bmiVAlue <30)
        {
            this.result = "Over Weight"
        }
        else
        {
            this.result = "Obsese"
        }
        console.log("BMI value is : ",this.bmiVAlue)
        console.log("Result is : ",this.result)
    }

    recalculate()
    {
        this.result = ''
        this.bmiVAlue = ''
        this.height = ''
        this.weight = ''
    }
}