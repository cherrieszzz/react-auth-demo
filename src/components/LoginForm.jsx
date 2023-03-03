import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useLogin from '../hooks/useLogin';
import { TextField, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({

}))

function LoginForm() {
  const [username, setUsername] = useState('')
  const [passwd, setPasswd] = useState('')
  const [token, setToken] = useState('')
  const [data, err, login] = useLogin()

  const handlechange = (e) => {
    setUsername(e.target.value)
  }

  const handlechangePasswd = (e) => {
    setPasswd(e.target.value)
  }

  const handleclick = (e) => {
    e.preventDefault()
    login('http://localhost:3001', username, passwd)
    localStorage.setItem("token",data)
    console.log(data)
    if(!data) {
      alert("no token")
      return
    }

    window.location.href = '/admin'
    // 导航到管理员路由
    //history.push('/admin');
    //window.location.href = '/admin';
  }

  const classes = useStyle()

  return (
    <Container component='main' maxWidth='xs' style={classes}>
      <form onSubmit={handleclick}>
        <Typography variant='h4'>登陆</Typography>
        <div>
          <TextField fullWidth margin='normal' variant='outlined' label='用户名' autoFocus value={username} onChange={(e) => { handlechange(e) }} />
        </div>
        <div>
          <TextField fullWidth margin='normal' variant='outlined' label='密码' autoFocus value={passwd} onChange={(e) => { handlechangePasswd(e) }} />
        </div>
        <Button type='submit' color='primary' variant='contained' margin='normal' fullWidth>登陆</Button>
      </form>
    </Container>
  );
}

export default LoginForm
