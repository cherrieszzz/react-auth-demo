import { Typograph, Container, Card, Paper, Button, Input, Grid, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:'80vh',
        padding:'15vh 0'
    }
}))
const AddNew = () => {
    const classes = useStyles()
    const handleSubmit = () => {

    }
    return (
        <>
            <Container>
                <h1>创建新文章</h1>
                <Grid Container spacing={3} className={classes.root}>
                    <form onSubmit={handleSubmit}>
                        <Grid item sm={12}>
                            <TextField fullWidth variant="outlined" margin="normal" autoFocus label='标题' />
                        </Grid>
                        <Grid item sm={12}>
                            <TextField fullWidth variant="outlined" margin="normal" autoFocus label='文章内容' />
                        </Grid>
                        <Button type="submit" color="secondry" variant="outlined">添加</Button>
                    </form>
                </Grid>

            </Container>
        </>
    );
}

export default AddNew;