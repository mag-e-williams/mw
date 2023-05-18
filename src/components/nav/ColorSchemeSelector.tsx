import { SpeedDial, SpeedDialAction, Box, IconButton } from '@mui/material';
import { Moon, Sun, RefreshCw, PartyPopper, Palette } from 'lucide-react';

const ICON_SIZE = 16;

const actions = [
  { icon: <RefreshCw size={ICON_SIZE} />, name: 'System' },
  { icon: <Moon size={ICON_SIZE} />, name: 'Dark' },
  { icon: <Sun size={ICON_SIZE} />, name: 'Light' },
  { icon: <PartyPopper size={ICON_SIZE} />, name: 'Share' },
];

function SpeedDialCustomIcon() {
  return (
    <IconButton
      sx={(theme) => ({
        '& svg': {
          transition: theme.transitions.create('transform'),
          transformOrigin: 'center',
        },
        '&:hover svg': { transform: 'rotate(90deg)' },
      })}
    >
      <Box sx={() => ({ display: 'flex' })}>
        <Palette size={ICON_SIZE} />
      </Box>
    </IconButton>
  );
}

export function ColorSchemeSelector() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: -28, right: 0, zIndex: 10 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialCustomIcon />}
          direction="down"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{
                boxShadow: 'none',
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </Box>
  );
}

// export function ColorSchemeToggle() {
//   const { colorScheme, updatePreferredMode } = useColorScheme();
//   const setInvertedScheme = () =>
//     updatePreferredMode(colorScheme.mode === 'dark' ? 'light' : 'dark');

//   return (
//     <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
//       <ColorSchemeIcon mode="light" />
//       <Switch
//         onChange={setInvertedScheme}
//         checked={colorScheme.isInitialized && colorScheme.mode === 'dark'}
//         aria-label="Change color scheme mode"
//         aria-hidden
//         tabIndex={-1}
//         sx={(theme) => ({
//           // Overrides our "animations off" for color scheme changes since we do always want the switch to animate
//           '& *': {
//             transition: `${theme.transitions.create('all', {
//               duration: theme.transitions.duration.complex,
//             })} !important`,
//           },
//           height: HEIGHT_PX,
//           width: WIDTH_PX,
//           margin: 0,
//           padding: 0,

//           [`&& .${switchClasses.switchBase}`]: {
//             cursor: colorScheme.isInitialized ? 'pointer' : 'not-allowed',
//             margin: PADDING,
//             padding: 0,

//             [`&.${switchClasses.checked}`]: {
//               transform: `translateX(${WIDTH_PX - TRACK_SIZE_PX - 2 * PADDING_PX}px)`,
//               [`&& + .${switchClasses.track}`]: {
//                 opacity: 1,
//                 backgroundColor: colorScheme.isCustomized
//                   ? theme.vars.palette.active.main
//                   : theme.vars.palette.card.border,
//               },
//             },
//           },
//           [`&& .${switchClasses.input}`]: {
//             width: WIDTH_PX * 2 + TRACK_SIZE_PX,
//             height: HEIGHT_PX,
//             left: -WIDTH_PX - TRACK_SIZE_PX / 2,
//             top: -PADDING_PX,
//           },
//           [`& .${switchClasses.thumb}`]: {
//             backgroundColor: theme.vars.palette.common.white,
//             width: TRACK_SIZE_PX,
//             height: TRACK_SIZE_PX,
//           },
//           [`&&& .${switchClasses.track}`]: {
//             opacity: 1,
//             backgroundColor: colorScheme.isCustomized
//               ? theme.vars.palette.active.main
//               : theme.vars.palette.card.border,
//             borderRadius: HEIGHT_PX / 2,
//             transition: theme.transitions.create('background-color'),
//           },
//         })}
//       />
//       <ColorSchemeIcon mode="dark" />
//       <ColorSchemeIcon mode="party" />

//     </Stack>
//   );
// }
