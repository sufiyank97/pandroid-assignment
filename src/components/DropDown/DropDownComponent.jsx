import React, { useState, useContext, useEffect, Fragment } from 'react'
import { Modal } from 'react-bootstrap'

import UserTitle from '../UserTitle/UserTitle'

import { DropDown, UserContext } from '../Providers/index'



const DropDownComponent = (props) => {
    const [show, setShow] = useState(false);

    const { dropDownValues, setDropDownValue } = useContext(DropDown)
    const { values, setValue } = useContext(UserContext)

    useEffect(() => {
        setShow(dropDownValues.show)
    }, [dropDownValues.show])
    const handleClose = () => { setShow(false); setDropDownValue(!dropDownValues.show) };
    const handleShow = () => setShow(true);

    const addUser = () => {
        setValue({
            ...values,
            currentUser: {},
            tabName: 'Profile'
        })
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body >
                    <div className="dropdown">
                        <UserTitle user={values.currentUser} size="medium" />
                        <span className="dropdown-email">{values.currentUser.email}</span>
                    </div>


                    <span className="divider" style={{ backgroundColor: '#CCCCCC' }}></span>
                    {
                        (values.addUser.length > 1) ? (
                            <>
                                <div className="dropdown-list px-3 pt-2">
                                    {
                                        values.addUser.map(user => {
                                            if (values.currentUser.id === user.id) {
                                                return <Fragment key={user.id} />
                                            } else {
                                                return (
                                                    <Fragment key={user.id}>
                                                        <UserTitle user={user} key={user.id} size="small" font={true} />
                                                        <span className="divider"></span>
                                                    </Fragment>
                                                )
                                            }
                                        }
                                        )
                                    }
                                </div>
                                <span className="divider" style={{ backgroundColor: '#CCCCCC' }}></span>
                            </>
                        ) : <Fragment />
                    }


                </Modal.Body>
                <Modal.Footer>

                    <span className="dropdown-add-button" onClick={() => addUser()}>
                        <i className="fas fa-user-plus dropdown-add-button-icon"></i>
                        <span className="dropdown-add-button-text">Add another User</span>
                    </span>

                    <button className="btn-footer" onClick={() => {
                        setValue({ ...values, currentUser: {}, addUser: [], tabName: '' });
                        handleClose()
                    }}>Sign out</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default DropDownComponent
