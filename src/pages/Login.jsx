import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import { Grid, makeStyles, Paper, Box } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(https://www.acy.moe/api/4)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100vh'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

const Login = () => {
    const classes = useStyle()
    return (
        <>
            <Grid container>
                <Grid item xs={false} sm={4} md={8} className={classes.image} />
                <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <LoginForm />
                        <Box mt={20}>
                            <Footer />
                        </Box>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;