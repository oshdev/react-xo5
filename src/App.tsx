import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [turn, setTurn] = useState('x')
  return (
    <div className="App">
      {turn}
      <table cellSpacing={0} cellPadding={0}>
        <tbody>
        {new Array(50).fill('').map((_, i) => <tr key={i}>
          {new Array(50).fill('').map((_, j) => <td key={j}>
            <input type="button" style={{ border: '1px solid grey', width: '15px', height: '15px' }}
                   onClick={(e) => {
                     // @ts-ignore
                     if (!e.target.value) {
                       // @ts-ignore
                       e.target.value = turn
                       setTurn(turn === 'x' ? 'o' : 'x')
                     }
                     return false
                   }}/>
          </td>)}
        </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default App
