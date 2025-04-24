import React from 'react';
import Button from 'react-bootstrap/Button';


function UserProfile() {

    let username = "George Hewett";
    let careerState = "in early careers";

    // API CALL TO GET USER DETAILS FROM WORKDAY
  return (
    <div>
        <p>
            Hi, {username}! It looks like you are {careerState}.
        </p>

        <Button variant="success">View your suggested products</Button>

    </div>
  );
}

export default UserProfile;
