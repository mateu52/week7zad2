
function UserDetail( { img, name }) {
    const im = JSON.stringify(img);
    return(
        <>
        <h3>{im}</h3>
        <h3>{ img } {console.log({img})}, { name }</h3>
        </>
    )
}

export default UserDetail;