import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="UI container comments">
      <CommentDetail author="Scott" timeAgo="Today at 14:45" />
      <CommentDetail author="Frank" timeAgo="Yesterday at 19:55"/>
      <CommentDetail author="Catty" timeAgo="Wednesday at 08:23"/>
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
