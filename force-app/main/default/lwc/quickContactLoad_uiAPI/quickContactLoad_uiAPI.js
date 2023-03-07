import { LightningElement,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class QuickContactLoad_uiAPI extends LightningElement {

    @api recordId;
    contact;
    name;
    phone;


}