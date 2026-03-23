var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(name, id, roomno) {
        this.name = name;
        this.id = id;
        this.roomno = roomno;
        console.log("Name", this.name);
    }
    return Point;
}());
var secpoint = /** @class */ (function (_super) {
    __extends(secpoint, _super);
    function secpoint(sname, room, cardnumber) {
        var _this = _super.call(this, sname, cardnumber, room) || this;
        _this.sname = sname;
        _this.room = room;
        _this.cardnumber = cardnumber;
        return _this;
    }
    return secpoint;
}(Point));
var abc = new secpoint("sumit", 68878, 2388);
console.log(abc.name);
console.log(abc.id);
console.log(abc.roomno);
