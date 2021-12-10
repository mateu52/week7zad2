import "./userList.css";


const UserDetail = ( props) => {
    const checkVal = (value, text) => {
        if (!value) {
            return text;
        }
        return value;
    }
    return (
        <div className="userMap"> 
        
            <p>
                <img alt="foto" src={props.picture} ></img></p>
                
            <p>
                {checkVal(props.name, "Nie podano imienia")} 
                {checkVal(props.surname, "Nie podano nazwiska")}
            </p>
            <p>
                {checkVal(props.location, "brak")}: 
                {checkVal(props.location1, "brak")}
            </p>
            <p>{props.city}</p>
            <p>{props.email}</p>
            <p>{new Date(props.date).toDateString()}</p>
            
        </div>
    )
}

export default UserDetail;