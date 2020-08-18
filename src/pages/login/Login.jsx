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
        <div className="d-flex justify-content-center mx-5 my-5">
            {
                (datas.length === 0) ? (
                    <div className="">Loading...</div>
                ) : (
                        <div className="card">
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
        </div>
    )
}

export default Login
