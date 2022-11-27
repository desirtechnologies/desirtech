import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';




const Controller = () => {

  const actions = [
    { icon: <KeyboardDoubleArrowUpIcon />, name: 'Top' },

  ];

  return (
    <SpeedDial
      ariaLabel="Desir Tech Compass"
      FabProps={{
        classes: {
          "root": "duration-500 ease-in-out"
        },
        sx: {
          bgcolor: '#32c82f',
          outline: "#000000",
          boxShadow: "4px 4px black",
          '&:hover': {
            backgroundImage: "radial-gradient(circle, #32c82f, #000000, #00728c, #000000, #32c82f)",

          }
        }
      }}
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<CodeIcon />}
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

export default Controller