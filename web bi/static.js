class tt {
    name = 'nam';
    constructor() {}
    static tinh_toan1(b) {
        let c = b * 3;
        const a = 1
        console.log(c)
    }
}
class tt2 extends tt {
    chieu_dai = '10'
    constructor() {}
    tinh_toan2(b) {
        console.log(b * 2)
    }
}
let a=tt2.tinh_toan1(1);
console.log(a)