import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    login:{
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
    },
    admin:{
        main: {
            minHeight: '100vh',
            backgroundColor:'black'
        },
    },
    appbar:{
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        linka: {
            textDecoration:'none',
            color:'white'
        }
    },
    blogdetail:{
        root:{
            minHeight:'80vh',
            margin:'4vh 0'
        }
    },
    bloglist:{
        main: {
            margin: '3vh 0',
        },
        card: {
    
            padding: theme.spacing(3)
        },
        link: {
            textDecoration: 'none'
        },
        title: {
            margin:'3vh 3vh'
        }
    }
}))

export default useStyles