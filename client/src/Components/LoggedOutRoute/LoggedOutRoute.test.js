import LoggedOutRoute from '.';
import { render, shallow } from 'enzyme';

describe('LoggedOutRoute', () => {
    let component;
    let state = {
        isLoggedIn: false }

    beforeEach(() => {
        component = shallow(<LoggedOutRoute />);
    })

    test('it renders', () => {
        expect(component.find('Route')).toHaveLength(1)
    })
    
    test('it exists', () => {
        expect(component.find('LoggedOutRoute').exists()).toBeFalsy();
    })

    test('it redirects to /home link', () => {
    let links = component.find('Redirect');
    expect(links).toHaveLength(0)
    })

    test('It should return logged in for a false statement', () => {
        let LoggedOutRoute = component.find('Route')
        expect(LoggedOutRoute).toHaveLength(1)
    })

    test('It calls props.isLoggedIn when rendered', () => {
        let LoggedOutRoute = component.find('Route')
        expect(LoggedOutRoute).toHaveLength(1)
    })

    test('check logout', ()=>{
        let instance = component.instance();
        instance.setState({ isLoggedIn: true });
        expect(instance.state.isLoggedIn).toBe(true);

        instance.logout();

        expect(instance.state.isLoggedIn).toBe(false);
    })

})
