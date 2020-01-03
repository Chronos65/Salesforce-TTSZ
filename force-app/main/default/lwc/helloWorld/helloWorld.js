import { LightningElement, track } from 'lwc';
/*added test comment*/
export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}