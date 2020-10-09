import React from 'react';
import propTypes from 'prop-types'

const Message = ({ message, author }) => (
  <p className="text-white">
    <i>{author}</i> : {message}
  </p>
)

Message.propTypes = {
  message: propTypes.func.isRequired,
  author: propTypes.func.isRequired
}

export default Message