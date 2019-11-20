//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(
  <CommentBox url='http://'    
    pollInterval={2000} />,
  document.getElementById('root')
);