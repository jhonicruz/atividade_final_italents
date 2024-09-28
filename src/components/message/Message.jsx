/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Message = ({ content, type = 'sucess' }) => {
  return type === 'sucess' ? (
    <p className="p-2 bg-n2 text-emerald-400 rounded animate-in">{content}</p>
  ) : (
    <p className="p-2 bg-n2 text-red-500 rounded ">{content}</p>
  );
};

export default Message;
