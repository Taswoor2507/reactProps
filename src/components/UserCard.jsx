import React from 'react'

const UserCard = (props) => {
    // console.log(props.userData.name)
  return (
    <div>
        <h2>Name  = {props.userData.name}</h2>
        <p>
            city = {props.userData.city}
        </p>
        <img  src={props.userData.imageUrl}  width="200px"/>
    </div>
  )
}

export default UserCard