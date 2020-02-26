import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

class CommentBox extends Component {
    state = {
        comment: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <h3>Comment Box</h3>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add a comment</h5>
                    <textarea
                        value={this.state.comment}
                        onChange={e =>
                            this.setState({ comment: e.target.value })
                        }
                    />
                    <div>
                        <button>submit</button>
                    </div>
                </form>
                <button id='fetch-btn' onClick={this.props.fetchComments}>
                    FetcH Comment
                </button>
            </div>
        );
    }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);
