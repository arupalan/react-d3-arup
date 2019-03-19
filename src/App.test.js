import React from 'react';
import App from './App';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

describe('>>> App --- Snapshot', () => {
  it('+++capturing Snapshot of App', () => {
    const renderedValue = renderer.create(<App />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('>>> App --- Shallow Renderer REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have Header', () => {
    expect(wrapper).toContainReact(<Header />);
  });

  test('should have About', () => {
    expect(wrapper).toContainReact(<About path="/about" />);
  });

  test('should have NotFound', () => {
    expect(wrapper).toContainReact(
      <NotFound title="Page Not Found" default={true} />
    );
  });

  test('should have Footer', () => {
    expect(wrapper).toContainReact(<Footer />);
  });

  test('should not have device or chat', () => {
    expect(wrapper).not.toContainMatchingElements(1, '.device');
    expect(wrapper).not.toContainMatchingElements(1, '.chat');
  });
});

describe('>>> App --- Mount Renderer REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should have Header', () => {
    expect(wrapper).toContainMatchingElements(1, '.device');
    expect(wrapper).toContainMatchingElements(1, '.chat');
  });
});
