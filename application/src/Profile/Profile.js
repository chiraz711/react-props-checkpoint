import React from 'react'


function Profile(props) {
    return (
        <div>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <h2 style={{ marginTop: '1rem' }}>{this.props.fullName}</h2>
           {/* <p style={{ margin: 0 }}>{data.bio}</p>
           <p style={{ margin: 0 }}>{this.props.profession}</p> */}
           </div>
        </div>
    )  
}

export default Profile;