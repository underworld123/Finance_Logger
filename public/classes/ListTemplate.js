var ListTemplate = /** @class */ (function () {
    function ListTemplate(c) {
        this.container = c;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerHTML = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
export { ListTemplate };
