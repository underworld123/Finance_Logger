import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/hasFormatter.js';

//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
const form=document.querySelector(".new-item-form") as HTMLFormElement;
//this is called type casting in typescript using 'as' (try removing as HTMLFormElement and hover over form)
// console.log(form.children);

//grab inputs
const type=document.querySelector("#type") as HTMLSelectElement;
const tofrom=document.querySelector("#tofrom") as HTMLInputElement;
const details=document.querySelector("#details") as HTMLInputElement;
const amount=document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);

form.addEventListener('submit', (ev:Event) => {
    ev.preventDefault();
    // console.log(type.value,tofrom.value,details.value,amount.valueAsNumber);
    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }
    else{
        doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }
    // console.log(doc.format());
    list.render(doc,type.value,'start');
});