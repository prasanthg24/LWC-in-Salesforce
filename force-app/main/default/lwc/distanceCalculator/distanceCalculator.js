import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import DISTANCE_FIELD from '@salesforce/schema/Account.Distance__c';
import PRICE_PER_KM_FIELD from '@salesforce/schema/Account.Price_per_km__c';

export default class CalculateDistance extends LightningElement {
  @api recordId;
  distance;
  pricePerKm;

  @wire(getRecord, { recordId: '$recordId', fields: [DISTANCE_FIELD, PRICE_PER_KM_FIELD] })
  account;

  connectedCallback() {
    this.distance = getFieldValue(this.account.data, DISTANCE_FIELD);
    this.pricePerKm = getFieldValue(this.account.data, PRICE_PER_KM_FIELD);
  }

  handleCalculate() {
    const event = new CustomEvent('calculate', {
      detail: {
        distance: this.distance,
        pricePerKm: this.pricePerKm
      }
    });
    this.dispatchEvent(event);
  }
}