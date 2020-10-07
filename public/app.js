import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
var form = document.querySelector(".new-item-form");
//this is called type casting in typescript using 'as' (try removing as HTMLFormElement and hover over form)
// console.log(form.children);
//grab inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    // console.log(type.value,tofrom.value,details.value,amount.valueAsNumber);
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // console.log(doc.format());
    list.render(doc, type.value, 'start');
});
