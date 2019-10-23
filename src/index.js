import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="UI container comments">
      <CommentDetail author="Scott" timeAgo="Today at 14:45" authComm="Nice one bruva" avatar={faker.image.avatar()} />
      <CommentDetail author="Frank" timeAgo="Yesterday at 19:55" authComm="Sweet photo" avatar={faker.image.avatar()} />
      <CommentDetail author="Catty" timeAgo="Wednesday at 08:23" authComm="This comment uses props" avatar={faker.image.avatar()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
