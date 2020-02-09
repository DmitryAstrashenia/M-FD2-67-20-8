function HashStorageFunc() {
    this._dataBase = {};

    this.addValue = function(key, value) {
        this._dataBase[key] = value;
    }

    this.getValue = function(key) {
        return this._dataBase[key];
    }

    this.deleteValue = function(key) {
        if (key in this._dataBase) {
            delete this._dataBase[key];
            return true;
        } else {
            return false;
        }
    }

    this.getKeys = function() {
        return Object.keys(this._dataBase);
    }
}

function Country() {
    HashStorageFunc.call(this);

    this.getCapital = function(key) {
        let info = [key, this._dataBase[key]]
        return info;
    }

    this.deleteAll = function() {
        return this._dataBase = {};
    }

    let parentEnable = this.getKeys;
    this.getKeys = function() {
        parentEnable.call(this);
        let n = 0;
        for (let key in this._dataBase) {
            n++;
        }
        return Object.keys(this._dataBase).concat(n);
    }

}

let country = new Country();

country.addValue('Германия', 'Берлин', );
country.addValue('Беларусь', 'Минск', );
country.addValue('Россия', 'Москва', );



function Students() {
    HashStorageFunc.call(this);

    this.getPieses = function() {
        let n = 0;
        for (let key in this._dataBase) {
            n++;
        }
        return n;
    }

    let parentEnable = this.getKeys;
    this.getPiesesKeys = function(value) {
        parentEnable.call(this);
        let n = 0;
        for (let key in this._dataBase) {
            if (this._dataBase[key] === value) {
                n++;
            }
        }
        return n;
    }
}

let students = new Students();

students.addValue('Иванов', 'М', );
students.addValue('Петров', 'М', );
students.addValue('Козлов', 'М', );
students.addValue('Петрова', 'Ж', );
students.addValue('Сидорова', 'Ж', );