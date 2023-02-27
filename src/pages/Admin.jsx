import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";
import { Container, makeStyles, Typography} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    main: {
        minHeight: '100vh'
    },
    paper: {
        padding: theme.spacing(3),
        textAlign:'center',
    }
}))

const Admin = () => {
    const classes = useStyles()

    const { data: users, isPending, error } = useFetch('http://jsonplaceholder.typicode.com/users')

    return (
        <>
            <Appbar />
            <Container className={classes.main}>
                {isPending && <div>loading....</div>}
                {error && <div>500 server error</div>}
                {users && <div>
                    <Typography variant="h4">Admin Pages</Typography>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>用户名</TableCell>
                                <TableCell>昵称</TableCell>
                                <TableCell>邮箱</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map((row) => (
                                    <TableRow key = {row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.username}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
                }
            </Container>
            <Footer />
        </>


    );
}

export default Admin;