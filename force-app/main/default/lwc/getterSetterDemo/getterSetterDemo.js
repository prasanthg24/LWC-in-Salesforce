import { LightningElement } from 'lwc';
export default class GetterSetterDemo extends LightningElement {

    upperCaseItem ='prasanth gopinathan';
    handleClick()
    {
        this.itemName ='After Click';
    }
    get itemName()
    {
        alert('Called get')
        return this.upperCaseItem;
    }

    set itemName(value)
    {
        this.upperCaseItem = value.toUpperCase();
    }
}