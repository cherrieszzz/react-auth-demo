import { Typography, Link } from "@material-ui/core";

const Footer = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center" mt={10}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;