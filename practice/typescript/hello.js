var Thing = /** @class */ (function () {
    function Bank() {
        this._size = 0;
    }
    Object.defineProperty(Thing.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            var num = Number(value);
            // Don't allow NaN, Infinity, etc
            if (!Number.isFinite(num)) {
                this._size = 0;
                return;
            }
            this._size = num;
        },
        enumerable: false,
        configurable: true
    });
    console.log("hello vanshika ")
    return Thing;
}());
