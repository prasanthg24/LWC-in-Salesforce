import { LightningElement } from 'lwc';
export default class RenderHTMLConditionally extends LightningElement {


areaDetailVisible = false;

handleChange(event)
{
 this.areaDetailVisible =event.target.checked;
}



}