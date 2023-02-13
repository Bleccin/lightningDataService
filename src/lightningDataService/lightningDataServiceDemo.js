import { LightningElement } from 'lwc';

export default class LightningDataServiceDemo extends LightningElement {

    handleError(){

        alert('Error Occured');
    }

    handleSuccess(){

        alert('Record Created');

    }
    handleSubmit(){

        alert('Form submitted ');

    }





}