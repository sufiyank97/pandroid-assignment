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
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-data-first" viewBox="0 0 1440 320"><path fill="#7456C8" fillOpacity="3" d="M0,96L24,90.7C48,85,96,75,144,106.7C192,139,240,213,288,240C336,267,384,245,432,224C480,203,528,181,576,176C624,171,672,181,720,208C768,235,816,277,864,266.7C912,256,960,192,1008,149.3C1056,107,1104,85,1152,80C1200,75,1248,85,1296,117.3C1344,149,1392,203,1416,229.3L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-data-second" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="3" d="M0,96L24,90.7C48,85,96,75,144,106.7C192,139,240,213,288,240C336,267,384,245,432,224C480,203,528,181,576,176C624,171,672,181,720,208C768,235,816,277,864,266.7C912,256,960,192,1008,149.3C1056,107,1104,85,1152,80C1200,75,1248,85,1296,117.3C1344,149,1392,203,1416,229.3L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </div>
        </div>
    )
}

export default Login
