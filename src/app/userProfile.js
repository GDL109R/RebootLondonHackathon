'use client'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Results from './results';


function UserProfile() {

    const [showResults, setShowResults] = useState(false);

    let username = "George Hewett";
    let careerState = "in early careers";

    // API CALL TO GET USER DETAILS FROM WORKDAY
  return (
    <div>
        <p>
            Hi, {username}! It looks like you are {careerState}.
        </p>

        <Button variant="success" onClick={() => setShowResults(true)}>
        View your suggested products
      </Button>

      {showResults && <Results />}

    </div>
  );
}

export default UserProfile;
