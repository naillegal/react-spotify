import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


export default function VolumeControl() {
  const [volume,setVolume] = React.useState(30)
  const [isMuted,setIsMuted] = React.useState(false)
  const MuteHandle = (newValue: any) => {
    if (!isMuted) {
      setVolume(newValue)
    }
  }
  
  const MuteToggle:any = () => {
    setIsMuted((muted) => !muted);
    if (isMuted) {
      setVolume(30);
    }
  }

  const theme = useTheme();
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255.4)';
  return (
    <div>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            {
                isMuted ? <VolumeOffIcon htmlColor={lightIconColor} onClick={MuteToggle}/> : <VolumeDownRounded htmlColor={lightIconColor} onClick={MuteToggle} /> 
            }
            <Slider
                aria-label="Volume"
                defaultValue={volume}
                value={isMuted ? 0 : volume}
                onChange={(e, newValue) => {MuteHandle(newValue)}}
                sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(255,255,255.87)',
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    width: 10,
                    height: 10,
                    backgroundColor: '#fff',
                    '&::before': {
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                    width: 15,
                    height: 15,
                    },
                },
                }}
            />
        </Stack>
    </div>
  );
}