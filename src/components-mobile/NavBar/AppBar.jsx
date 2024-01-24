import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../images/Logo orange.png";
import AvatarIcon from '../../components/AvatarIcon/AvatarIcon';
import NotificationIcon from '../../components/NotificationIcon/NotificationIcon';

export default function ButtonAppBar() {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Paper variant='elevation' elevation={4}>
                    <Toolbar>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={logo} />
                        </Typography>
                        <AvatarIcon />
                        <NotificationIcon />
                    </Toolbar>
                </Paper>
            </AppBar>
        </Box>
  );
}