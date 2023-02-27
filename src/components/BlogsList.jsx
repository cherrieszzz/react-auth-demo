import useFetch from "../hooks/useFetch";
import { Container, Grid, Typography, Card, makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card:{
        padding:theme.spacing(3)
    },
    link: {
        textDecoration:'none'
    }
}))

const BlogsList = () => {
    const classes = useStyles()
    const { data: blogs, isPending, error } = useFetch('http://jsonplaceholder.typicode.com/posts')
    return ( 
        <Container>
                {isPending && <Typography>loding....</Typography>}
                {error && <Typography>error from server</Typography>}
                <Grid container spacing={3}>
                    {
                        blogs && blogs.map((blog) => (
                            <Grid item sm={12} key={blog.id}>
                                <Card  className={classes.card} >
                                    <Typography variant="h5">
                                        <Link to = {`/blogs/${blog.id}`} className={classes.link}> {blog.title}</Link>
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