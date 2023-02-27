import useFetch from "../hooks/useFetch";
import { Typography , Container, makeStyles} from "@material-ui/core";
import { useParams } from "react-router-dom";
import Appbar from "./Appbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:'80vh',
        margin:'4vh 0'
    }
}))

const BlogDetail = () => {
    const classes = useStyles()
    const {id} = useParams()
    const { data: blog, isPending, error } = useFetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    return ( 
        <>
        <Appbar />
        <Container>
            {isPending && <Typography>loding....</Typography>}
            {error && <Typography>error from server</Typography>}
            {blog && <div className={classes.root}>
                <Typography variant="h4">{blog.title}</Typography>
                <Typography>{blog.body}</Typography>
            </div>}
        </Container>
        <Footer />
    </>
    );
}
 
export default BlogDetail;