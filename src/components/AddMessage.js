import React from 'react';
import propTypes from 'prop-types'

const AddMessage = (props) => {
  let input

  return (
    <section className="my-4 py-8 flex  align-items-center  grid grid-cols-3">
      <textarea placeholder="Add New Message" className="col-span-2 placeholder-gray-500 placeholder-opacity-100 px-2 py-2 rounded-sm mr-3 shadow-sm" onKeyPress={(e) => {
        if (e.key === 'Enter' && input.value.replace(/\s/g, '') !== '') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
          input = node
        }}
      ></textarea>
      <button type="button" class="col-span-1 bg-blue-700 text-gray-200 rounded hover:bg-blue-600 px-4 py-2 focus:outline-none shadow-sm" onClick={() => {
        if (input.value.replace(/\s/g, '') !== '') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}>Send</button>

    </section >
  )
}

AddMessage.propTypes = {
  dispatch: propTypes.func.isRequired
}

export default AddMessage