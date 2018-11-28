'use strict';

module.exports = {
  generateRandomData
};

function generateRandomData(userContext, events, done) {
    const id = Math.floor(Math.random() * 100);
    userContext.vars.id = id;
    return done();
};