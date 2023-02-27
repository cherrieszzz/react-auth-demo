import useFetch from "../hooks/useFetch";
import { Container, Grid, Typography, Card, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
}))

const BlogsList = () => {
    const classes = useStyles()
    const { data: blogs, isPending, error } = useFetch('http://jsonplaceholder.typicode.com/posts')
    return (
        <Container>
            <Typography variant="h4" className={classes.title}>Blogs list</Typography>
            {isPending && <Typography>loding....</Typography>}
            {error && <Typography>error from server</Typography>}
            <Grid container spacing={3} className={classes.main}>
                {
                    blogs &&
                    blogs.map((blog) => (
                        <Grid item sm={7} key={blog.id}>
                            <Card className={classes.card} >
                                <Typography variant="h5">
                                    <Link to={`/blogs/${blog.id}`} className={classes.link}> {blog.title}</Link>
                                </Typography>
                            </Card>

                        </Grid>

                    ))
                }
            </Grid>
        </Container>
    );
}
export default BlogsList;