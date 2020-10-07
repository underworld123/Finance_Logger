var Payment = /** @class */ (function () {
    function Payment(r, d, a) {
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed " + this.amount + " for " + this.details;
    };
    return Payment;
}());
export { Payment };
