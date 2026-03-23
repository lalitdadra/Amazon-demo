class Point {
    constructor(
        private name: string,
        public id: number,
        public roomno: number
    ) {
        console.log("Name", this.name);
    }
    }

class secpoint extends Point {
    constructor(
        public sname: string,
        public room: number,
        public cardnumber: number
    ) {
        super(sname, cardnumber, room); 
    }
}
const abc = new secpoint("sumit", 68878, 2388);

