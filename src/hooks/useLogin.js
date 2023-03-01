import { useState, useEffect } from "react";

const useLogin = (url, username, passwd) => {
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(false)

 
        // 定义数据对象
        const data1 = {
            username: username,
            passwd: passwd
        };

        // 设置选项
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data1)
        };

        // 发送请求
        fetch(url, options)
            .then(response => {
                setIspending(true)
                return response.json()
            })
            .then(data => {
                setIspending(false)
                setData(data)
                return data
            })
            .catch(error => {
                setError(true)
                console.error(error)
            });


    return { data, isPending, error }
}

export default useLogin;

