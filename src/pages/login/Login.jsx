import React, { useState, useEffect, Fragment, useContext } from 'react'
import axios from 'axios';
import UserTitle from '../../components/UserTitle/UserTitle'
import { UserContext } from '../../components/Providers/UserProvider/UserContext'
const Login = () => {
    const [datas, setState] = useState([])
    const { values } = useContext(UserContext)
    useEffect(() => {
        let isCancelled = false
        const fetchApi = async () => {
            const res = await axios.get("https://panorbit.in/api/users.json")
            const result = res.data.users.filter(obj => !values.addUser.some(obj2 => obj.id === obj2.id))
            setState(result)
        }
        (!isCancelled && fetchApi())
        return () => {
            isCancelled = true
        }
    }, [])

    return (
        <div className="login">
            {
                (datas.length === 0) ? (
                    <div className="">Loading...</div>
                ) : (
                        <div className="card  mx-5 my-5">
                            <div className="card-body px-0 py-0">
                                <div className="card-title">
                                    <span>Select an account</span>
                                </div>
                                <div className="card-list px-3 pt-2">

                                    {
                                        datas.map(data => (
                                            <Fragment key={data.id}>
                                                <UserTitle user={data} key={data.id} type="login" size="small" />
                                                <span className="divider"></span>
                                            </Fragment>
                                        )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
            }
            <div className="svg-data">
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-data-first" viewBox="25 25 600 600"><path fill="#7456C8" fillOpacity="3" d="m-0.572102,3.04809l0.572102,173.95191c2.666667,31.333333 24.666667,101.333333 71,73c46.333333,-28.333333 110.666667,-69.666667 195,-51c84.333333,18.666667 191,94.666667 244,86c53,-8.666667 86,-45.333333 129,-68l-1,-214l-638.572102,0.04809z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-data-second" viewBox="25 25 600 600"><path fill="#0099ff" fillOpacity="3" d="m-0.572102,3.04809l0.572102,173.95191c2.666667,31.333333 24.666667,101.333333 71,73c46.333333,-28.333333 110.666667,-69.666667 195,-51c84.333333,18.666667 191,94.666667 244,86c53,-8.666667 86,-45.333333 129,-68l-1,-214l-638.572102,0.04809z"></path></svg>
            </div>
        </div>
    )
}

export default Login