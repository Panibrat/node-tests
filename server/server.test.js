const request = require('supertest');
var app = require('./server').app;
const expect = require('expect');


describe('Server', () =>{
    describe('GET /', () => {
    it('should return hello world responce', (done) => {
        request(app)
        .get('/')
        //.expect('Hello world!')
        .expect(200)
        .expect((res) => {
        expect(res.body).toInclude({
        error: 'Page not found.'
    })
})
.end(done);
})
});



describe('GET /users', () => {
    it('should return users object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
        expect(res.body).toInclude({
        name: "Katya",
        age: 18
    })
})
.end(done);
});
});
});


