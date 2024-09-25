const app = require('../src/app');
let server;

before(function (done) {
  server = app.listen(3001, () => {
    console.log('Test server running on port 3001');
    done();
  });
});

after(function (done) {
  server.close(done);
});
