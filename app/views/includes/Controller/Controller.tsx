import CodeIcon from '@mui/icons-material/Code';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';




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
          boxShadow: "4px 4px black",
          '&:hover': {
            backgroundImage: "linear-gradient(to top, #32c82f, #000000, #00728c, #000000, #32c82f)",

          }
        }
      }}
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<CodeIcon />}
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