import { LightningElement } from 'lwc';
export default class GetterMethod extends LightningElement {
Fname ='';
Lname ='';
handleChange(event)
 {
     const targetName = event.target.name;
     console.log(targetName);
     if(targetName=='Firstname')
     {

        this.Fname = event.target.value;
     }
     else if (targetName=='Lastname')
     {
         this.Lname = event.target.value;
     }
     
 }
 get  UpperCaseFullName()
 {
     return (this.Fname + ' '+this.Lname).toUpperCase();
 }
}