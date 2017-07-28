const expect = require('expect');
const utils = require('./utils.js');

describe('Utils test:', () => {

    describe("#square", () => {
    it('should return square number', () => {
        var res = utils.square(9);
    expect(res).toBe(81).toBeA('number');
    if(res !== 81){
        throw new Error(`Expected 81, but got ${res}`);
    }
});

    it('should async square number', (done) => {
        utils.asyncSquare(5, (sqr) => {
        expect(sqr).toBe(25).toBeA('number');
    done();
});
});


});

describe("#objects", () => {
    it('should expect some values', () => {
    //expect(12).toNotBe(11);
    //expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
    // expect([1,2,3,4]).toInclude(4);
    expect([1,2,3,4]).toExclude(6);
});

it('should tests objects', () => {
    //expect(12).toNotBe(11);
    //expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
    // expect([1,2,3,4]).toExclude(4);
    var obj = {
        name: "Alex",
        age: 36,
        country: 'Ukraine'
    }
    expect(obj).toInclude({country: 'Ukraine'});
});

it('should return user with full names', () => {
    var sasha = {
        age: 36,
        phone: '12-232-434-22'};
var res = utils.setName(sasha, 'Alexander Panibratenko');
expect(res).toInclude({
    firstName: 'Alexander',
    lastName: 'Panibratenko'
});
expect(res.firstName).toBeA('string');
});
});






});


