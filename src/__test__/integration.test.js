import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

beforeEach(function() {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { name: 'fetched #1' },
            { name: 'fetched #2' },
            { name: 'fetched #3' },
            { name: 'fetched #4' }
        ]
    });
});

afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    wrapped.find('#fetch-btn').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(4);
        done();
        wrapped.unmount();
    });
});
