import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from '../Redux/actions/userActions'
import Spinner from './layout/Spinner';

const Dashboard = () => {
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    const { loading, error, users } = useSelector(state => state.data)

    return (
        <Fragment>
            <section>
                {
                    loading ? <Spinner/> :
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Employee List</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque distinctio, enim excepturi fuga fugiat harum hic illo impedit in ipsum iure laudantium libero maxime minus necessitatibus nemo placeat quia!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-striped">
                                    <thead className="bg-dark text-primary">
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>Email</th>
                                            <th>AGE</th>
                                            <th>PHONE NO</th>
                                            <th>GENDER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users &&
                                                users.map((user) => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.age}</td>
                                                            <td>{user.phoneNo}</td>
                                                            <td>{user.gender}</td>
                                                        </tr>
                                                    )
                                                })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
 
                }
                 </section>
        </Fragment>
    )
}

export default Dashboard
