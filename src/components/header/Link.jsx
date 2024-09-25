import React from 'react';

const Link = ({ content, url, ...rest }) => {
  return (
    <a href={url} {...rest}>
      {content}
    </a>
  );
};

export default Link;
