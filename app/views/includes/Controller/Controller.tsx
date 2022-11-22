import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';


export default function Controller() {

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },

  ];

  return (
    <SpeedDial
      ariaLabel="Desir Tech Compass"
      FabProps={{
        sx: {
          bgColor: "230bd80e"
        }
      }}
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
