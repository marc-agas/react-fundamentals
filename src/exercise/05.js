// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBoxStyle = {
  background: 'lightblue'
};

const mediumBoxStyle = {
  background: 'pink'
};

const largeBoxStyle = {
  background: 'orange'
}
const smallBox = <div className="box box--small" style={smallBoxStyle}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={mediumBoxStyle}>medium pink box</div>
const largeBox = <div className="box box--large" style={largeBoxStyle}>large orange box</div>

const Box = ({size='', backgroundColor='none', children}) => {

  const boxStyle = {
    backgroundColor: backgroundColor,
    fontStyle: 'italic',
  }
  return (
      <div className={`box box--${size}`} style={boxStyle}>{children}</div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" backgroundColor="lightblue">
        small lightblue box
      </Box>
      <Box size="medium" backgroundColor="pink">
        medium lightblue box
      </Box>
      <Box size="large" backgroundColor="orange">
        large lightblue box
      </Box>
    <Box>
      Sizeless Box
    </Box>
    </div>
  )
}

export default App
