import "./userList.css";


const UserDetail = ( props ) => {
    
    return (
        <div className="userMap"> 
        
            <p>
                <img alt="foto" src={ props.picture } ></img></p>
                
            <p>
                { props.name[0] } 
                { props.surname }
            </p>
            <p>
                { props.location }: 
                { props.location1 }
            </p>
            <p>{ props.city}{console.log(props.user)}</p>
            <p>{ props.email }</p>
            <p>{ new Date( props.date ).toDateString() }</p>
            
        </div>
    )
}

export default UserDetail;