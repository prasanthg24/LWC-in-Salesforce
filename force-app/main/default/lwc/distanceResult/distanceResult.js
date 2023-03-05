import { LightningElement, api } from 'lwc';

export default class DisplayCalculationResult extends LightningElement {
  @api distance;
  @api pricePerKm;
  result = '';

  handleCalculate(event) {
    const distance = event.detail.distance;
    const pricePerKm = event.detail.pricePerKm;
    this.result = distance * pricePerKm;
  }
  
  connectedCallback() {
    this.addEventListener('calculate', this.handleCalculate.bind(this));
  }
  
  disconnectedCallback() {
    this.removeEventListener('calculate', this.handleCalculate.bind(this));
  }
}