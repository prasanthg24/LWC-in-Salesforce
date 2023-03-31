import { LightningElement, wire, track } from 'lwc';
import getAccounts from'@salesforce/apex/AccountService.getAccounts';
export default class SearchAccountLWC extends LightningElement {
 @track searchKey;
  @wire (getAccounts,{strAccountName: '$searchKey'}) accounts;
  handleKeyChange(event){
    this.searchKey = event.target.value;
  }
}