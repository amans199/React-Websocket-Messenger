import React, { useRef } from 'react';
import propTypes from 'prop-types'
import Message from './Message'

const MessagesList = ({ messages }) => {
  let messages_list
  const scrollToTheEnd = useRef()
  // scrollToTheEnd.current.scrollIntoView({ behavior: 'smooth' })

  if (messages.length > 0) {
    messages_list = messages.map(message => {
      return <Message key={message.id} {...message} />
    })
  } else {
    messages_list = <p className="text-center text-white py-5">No Messages</p>
  }
  return (
    <section className="overscroll-contain overflow-y-auto h-30" style={{ height: '350px' }}>
      <div ref={scrollToTheEnd}></div>

      <ul>
        {
          messages_list
        }
      </ul>
    </section >
  )
}

MessagesList.propTypes = {
  messages: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      message: propTypes.string.isRequired,
      author: propTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default MessagesList