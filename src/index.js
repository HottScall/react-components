import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="UI container comments">
      <CommentDetail author="Scott" />
      <CommentDetail author="Frank" />
      <CommentDetail author="Catty" />
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
