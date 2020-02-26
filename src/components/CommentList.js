import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderComments() {
        return this.props.comments.map((comment, idx) => {
            return <li key={comment + idx}>{comment}</li>;
        });
    }

    render() {
        return (
            <div>
                <h3>Comment List</h3>
                {this.renderComments()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
