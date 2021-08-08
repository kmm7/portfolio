import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {useHistory, useLocation} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const location = useLocation();
    const history = useHistory();
    let title = '';
    // eslint-disable-next-line default-case
    switch (location.pathname) {
        case '/HaveFun':
            title = 'Have fun!';
            break;
        case '/Contacts':
            title = 'Contacts';
            break;
        case '/':
            title = 'Home';
            break;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                        edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {
                            history.push("/");
                            handleClose();
                        }}>Home</MenuItem>

                        <MenuItem onClick={() => {
                            history.push('/HaveFun');
                            handleClose();
                        }}>Have fun</MenuItem>

                        <MenuItem onClick={() => {
                            history.push('/Contacts');
                            handleClose();
                        }}>Contact</MenuItem>
                        
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
