import React from 'react'
import './colorPicker.css'
import PropTypes from 'prop-types'

const ColorPicker = ({color,changeColor}) => {

    const handleChange=(e)=>{
        changeColor(e.target.value)
    }

    return (
        <span className="color-picker">
        <label htmlFor="colorPicker">
          <input type="color" value={color} id="colorPicker" onChange={(e)=>handleChange(e)}/>
        </label>
      </span>
    )
}

ColorPicker.propTypes={
  color:PropTypes.string.isRequired,
  changeColor:PropTypes.func.isRequired
}


export default ColorPicker
