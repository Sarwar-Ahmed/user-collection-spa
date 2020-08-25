import React from 'react';

const Collection = (props) => {
    console.log(props)
    const person = props.collection;
    const totlaSalary = person.reduce((totlaSalary, slry) => totlaSalary + slry.salary, 0);
    const salary = Number(totlaSalary).toFixed(2);
    return (
        <div>
            <h3>User: {person.length}</h3>
            <h4>Total Salary: {salary}</h4>
        </div>
    );
};

export default Collection;