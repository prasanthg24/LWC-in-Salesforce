import { LightningElement,api,wire } from 'lwc';
import{getRecord,getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import RATING_FIELD from '@salesforce/schema/Account.Rating';


export default class QuickAccountLoad_UirecApi extends LightningElement 
{

@api recordId;

@wire(getRecord,{recordId: '$recordId',fields :[NAME_FIELD,TYPE_FIELD,RATING_FIELD]})
record;

get nameValue()
{
    return this.record.data ? getFieldValue(this.record.data,NAME_FIELD): ' ';
}
get typeValue()
{
    return this.record.data ? getFieldValue(this.record.data,TYPE_FIELD): ' ';
}
get ratingValue()
{
    return this.record.data ? getFieldValue(this.record.data,RATING_FIELD): ' ';
}



}