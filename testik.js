var testik = (a, b, callback) => {
    console.log(callback);
    setTimeout(() => {
        callback(a + b +10, 'adasd', 11111);
}, 1000);
};
/*var testik = (a, b, callback) => {
    callback(a + b +100);
    setTimeout(() => {
        callback(a + b +10);
}, 1000);
};*/

testik(3, 4, (sumccc,aaa,zzz) => {
    console.log(sumccc,aaa);
});


var t2 = (x,callback) => {
    setTimeout(()=>{
        callback (x * x);
}, 1000)
};

t2(5, (sq) => {
    console.log(sq);
});