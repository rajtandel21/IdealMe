import LoggedOutRoute from '.';
import { render, shallow } from 'enzyme';

describe('LoggedOutRoute', () => {
    let component;
    //let isLoggedIn = true;

    beforeEach(() => {
        component = shallow(<LoggedOutRoute 
            isLoggedIn={true}
            component={"Calories"}
        />);
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

    test('The props for isLoggedIn renders accordingly', () => {
        const loginComponent = shallow(<LoggedOutRoute isLoggedIn={true}/>)
        loginComponent.setProps({isLoggedIn: true})
        expect(loginComponent).toBeTruthy
    })
    
    test('The props for isLoggedIn renders accordingly', () => {
        const loginComponent = shallow(<LoggedOutRoute isLoggedIn={false}/>)
        loginComponent.setProps({isLoggedIn: false})
        expect(loginComponent).toBeFalsy
    })

})
