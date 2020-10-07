import { HasFormatter } from './../interfaces/hasFormatter.js';
//classes
export class Invoice implements HasFormatter{
    private client:string;
    private details:string;
    readonly amount:number;
    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    format(): string{
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}