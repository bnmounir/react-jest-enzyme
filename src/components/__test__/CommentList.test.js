import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('creates one < li > per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('show visible text', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
});
