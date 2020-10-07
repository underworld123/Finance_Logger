import { HasFormatter } from './../interfaces/hasFormatter';

export class Payment implements HasFormatter{
    private recipient:string;
    private details:string;
    readonly amount:number;
    constructor(r:string,d:string,a:number){
        this.recipient=r;
        this.details=d;
        this.amount=a;
    }
    format(): string{
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}