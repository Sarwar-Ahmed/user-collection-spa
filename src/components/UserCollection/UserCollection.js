import React, { useState } from 'react';
import "./UserCollection.css"
import fakeData from '../../fakeData/fakeData';
import User from '../User/User';
import Collection from '../Collection/Collection';

const UserCollection = () => {
    const users = [...fakeData];
    const [user, setUser] = useState(users);
    const [collect, setCollect] = useState([])
    const hadleAddPerson = (collection) => {
        const newCollection = [...collect, collection];
        setCollect(newCollection);
    }
    return (
        <div className="container-body">
            <div className="collection">
                <Collection collection={collect}></Collection>
            </div>
            <div className="user-info">
                {
                    user.map(usr => <User user={usr} hadleAddPerson={hadleAddPerson}></User>)   
                }
            </div>
        </div>
    );
};

export default UserCollection;