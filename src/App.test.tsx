import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './components/Pages/UnitTesting/Counter';
configure({ adapter: new Adapter() });

describe("Counter title testing", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  })

  test('renders learn react link', () => {

    expect(wrapper.find("h1").text()).toContain("Counter Game")

  });

  test("renders a button with text `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  });

  test("tenders a intial value of state in div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("-1");
  });
});
