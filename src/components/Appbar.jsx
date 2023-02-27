import { AppBar, Toolbar, Button, Typography, makeStyles} from '@material-ui/core'
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    link: {
        textDecoration:'none',
        color:'white'
    }
}));

const Appbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    管理
                </Typography>
                <Button color="inherit">
                    <Link to='/' className={classes.link}>登陆</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;