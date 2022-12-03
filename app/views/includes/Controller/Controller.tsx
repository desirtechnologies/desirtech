import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TerminalIcon from '@mui/icons-material/Terminal';



const Controller = () => {

  const Controls = [
    {
      icon: <KeyboardDoubleArrowUpIcon />,
      name: 'Top',
      action: () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },

  ];

  return (
    <SpeedDial
      ariaLabel="Desir Tech Compass"
      FabProps={{
        classes: {
          "root": "duration-500 ease-in-out"
        },
        sx: {
          bgcolor: '#008000',
          outline: "#000000",
          '&:hover': {
            backgroundColor: "#000000",
            boxShadow: "0px 0px #FFFFFF88",
            transitionDuration: "500ms"

          }
        }
      }}
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<TerminalIcon />}
    >
      {Controls.map((control) => (
        <SpeedDialAction
          onClick={control.action}
          key={control.name}
          icon={control.icon}
          tooltipTitle={<div className="font-mono">{control?.name}</div>}
        />
      ))}
    </SpeedDial>
  );
}

export default Controller