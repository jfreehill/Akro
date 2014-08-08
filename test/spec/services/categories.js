'use strict';

describe('Service: categories', function () {

  // load the service's module
  beforeEach(module('akroApp'));

  // instantiate service
  var categories;
  beforeEach(inject(function (_categories_) {
    categories = _categories_;
  }));

  it('should do something', function () {
    expect(!!categories).toBe(true);
  });

});
