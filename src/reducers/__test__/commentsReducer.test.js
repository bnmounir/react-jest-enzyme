import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from 'actions';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'payload comment'
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['payload comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
});
