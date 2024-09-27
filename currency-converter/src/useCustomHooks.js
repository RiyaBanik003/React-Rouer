import  { useEffect, useState } from 'react'

function useCustomHooks(currency) {
    const [data, setData]= useState({})
    useEffect(()=>{fetch(`https://v6.exchangerate-api.com/v6/a88fbba6cbfcd092c08196f4/latest/USD`).then((res)=> res.json()).then((res)=> setData(res[currency]))},[currency])
return data
}

export default useCustomHooks