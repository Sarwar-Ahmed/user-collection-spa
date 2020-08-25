import React from 'react';
import "./User.css"

const User = (props) => {
    const {name, email, phone, salary, img} = props.user;
    return (
        <div className="usr-body">
            <div className="usr-image">
                <img src={img} alt=""/>
            </div>
            <div className="usr-info">
                <h2>{name}</h2>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <h4><strong>Salary:</strong> {salary}</h4>
                <button onClick={() => props.hadleAddPerson(props.user)} className="addBtn" >Add Person</button>
            </div>
        </div>
    );
};

export default User;