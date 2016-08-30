import React from 'react';
import { renderIntoDocument, Simulate } from 'react-addons-test-utils';
import { findRenderedDOMComponentWithClass as findWithClass } from 'react-addons-test-utils';
import { scryRenderedDOMComponentsWithTag as scryWithTag } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import jsdom from 'jsdom';
import Shape from '../src/components/Shape';
import App from '../src/components/App';

describe('App', function () {
  let component, shallowComponent, selects;
  before(function () {
    let dom = jsdom.jsdom();
    global.document = dom;
    global.window = dom.defaultView;
    component = renderIntoDocument(<App/>);
    shallowComponent = shallow(<App/>);
    selects = scryWithTag(component, 'select');
  });

  it('it should contain two select elements', function () {
    expect(selects.length).to.equal(2);
  });

  it('should contain a Shape component', function () {
    expect(shallowComponent.find(Shape).length).to.equal(1);
  });

  describe('The first select element', function () {
    it('should control the color of the Shape component', function () {
      selects[0].value = 'green';
      Simulate.change(selects[0]);
      expect(findWithClass(component,'green')).to.exist;
      selects[0].value = 'red';
      Simulate.change(selects[0]);
      expect(findWithClass(component,'red')).to.exist;
      selects[0].value = 'blue';
      Simulate.change(selects[0]);
      expect(findWithClass(component,'blue')).to.exist;
    });
  });
  describe('The second select element', function () {
    it('should control the shape of the Shape component', function () {
      selects[1].value = 'circle';
      Simulate.change(selects[1]);
      expect(findWithClass(component,'circle')).to.exist;
      selects[1].value = 'square';
      Simulate.change(selects[1]);
      expect(findWithClass(component,'square')).to.exist;
      selects[1].value = 'diamond';
      Simulate.change(selects[1]);
      expect(findWithClass(component,'diamond')).to.exist;
    });
  });

});
