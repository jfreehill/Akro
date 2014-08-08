'use strict';

describe('Service: letters', function () {

  // load the service's module
  beforeEach(module('akroApp'));

  // instantiate service
  var letters;
  beforeEach(inject(function (_letters_) {
    letters = _letters_;
  }));

  it('should do something', function () {
    expect(!!letters).toBe(true);
  });

});
