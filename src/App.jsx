import { Alarm, ThreeDRotation } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import {
  useColorScheme
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle/>
      <div>danghoandev</div>
      <Typography variant='body2' color='text.secondary'>danghoandev</Typography>
      <Button variant="contained">Hello World</Button>
      <Alarm />
      <ThreeDRotation />
    </>
  )
}

export default App
