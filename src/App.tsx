  import React from 'react'
  import { Dropdown } from './stories/Dropdown'

  const data = [
    "John",
    "Emily ( She is very healthy and athletic, she has red hair )",
    "Michael",
    "Sophia",
    "David",
    "Jessica",
    "William",
    "Olivia",
    "Benjamin",
    "Emma"
  ]

  const App: React.FC = () => {
    return (
      <Dropdown items={data} labelVisibility='Visible' label='Select User' leftIconVisibility='Visible' labelIconVisibility='Visible' rightIconVisibility='Visible' text='select something' activeItemIndex={2} type={"Multi"} clearable='Yes' helperText="please select any user" />
    )
  }

  export default App