import { useState, useEffect } from "react";

function UserData({ userId }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    alert(userId)
    const fetchUserData = () => {
      fetch(`https://api.example.com/user/${userId}`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((failure) => setUserData("Not able to fetch the data"));
    };
    fetchUserData();
    
  }, [userId]); // Trigger fetch when userId changes

  return (
    <div>
      {userData ? (
        <div>
          {typeof userData === "object" ? (
            <>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
            </>
          ) : (
            <h1>{userData}</h1>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserData;
