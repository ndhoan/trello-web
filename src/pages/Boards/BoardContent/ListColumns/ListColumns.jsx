import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'


function ListColumns({ columns }) {
  return (
    // Box Wrapper
    <Box sx={{
      display: 'flex',
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      {columns.map(column => <Column key={column._id} column={column}/>)}

      {/* Add new column */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
          startIcon={<NoteAddIcon />}
        >Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListColumns