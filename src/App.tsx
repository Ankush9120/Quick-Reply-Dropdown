import React from 'react'
import { Dropdown } from './stories/Dropdown'

const data = [
  "Mic",
  "Om",
  "Keshav",
  "Shivam",
  "Kasyap",
  "Henry"
]

const App: React.FC = () => {
  return (
    <Dropdown items={data} activeItemIndex={1} type={"SingleNoIcon"} />
  )
}

export default App