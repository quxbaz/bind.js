var _ = require('./lib/underscore/underscore');
require('./lib/chai/chai').should();
var Handlebars = require('./lib/handlebars/handlebars');
var $ = require('./lib/jquery/dist/jquery');
var bind = require('../bind');

describe('bind.js', function() {

  var View;

  before(function() {
    bind.setup(Handlebars);
    View = function(data, html) {
      _.extend(this, data);
      this.html = html || '';
      this.el = document.createElement('div');
      this.$el = $(this.el);
    };
    View.prototype.render = function() {
      this.el.innerHTML = Handlebars.compile(this.html)(this.data);
      return this;
    };
  });

  it("should render a bound property.", function() {
    var v = new View({foo: 'hello'}, '{{bind "foo"}}').render();
    bind.bindProps(v, v.el);
    v.el.innerHTML.should.eql('hello');
  });

  it("should update a bound property.", function() {
    var v = new View({foo: 'hello'}, '{{bind "foo"}}').render();
    bind.bindProps(v, v.el);
    v.el.innerHTML.should.eql('hello');
    v.foo = 'world';
    v.el.innerHTML.should.eql('world');
  });

});
