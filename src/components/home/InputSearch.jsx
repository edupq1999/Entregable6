import React from 'react'

const InputSearch = ({setInputText, inputText}) => {

    const handleChange = e => {
        setInputText(e.target.value)
    }

  return (
    <div>
        <h3>Search by name</h3>
        <input value={inputText} onChange={handleChange} type="text" placeholder='Enter a name'/>
    </div>
  )
}

export default InputSearch