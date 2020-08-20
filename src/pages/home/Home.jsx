import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { Profile, Posts, ToDo, Gallery, Chat } from '../index'
import { NavBar, Header } from '../../components/index'

const Home = () => {
    return (
        <div className="home d-flex mx-3 my-3">
            <NavBar />
            <div className="home-page ml-5 w-100">
                <Header />

                <Switch>
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/posts' component={Posts} />
                    <Route exact path='/Gallery' component={Gallery} />
                    <Route exact path='/todo' component={ToDo} />
                </Switch>

                <Chat />
            </div>
        </div>
    )
}

export default Home
