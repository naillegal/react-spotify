import { IconButton } from '@mui/material';
import * as React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export interface IPlayButtonProps {
}

export default function PlayButton (props: IPlayButtonProps) {
  return (
    <IconButton aria-label="delete" size="large" className='hidden hover:visible hover:scale-110' >
        <PlayCircleIcon style={{fontSize: 50, color:'lime'}} />
    </IconButton>
  );
}
