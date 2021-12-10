import React from 'react';
import List from './List';
import "./userList.css";
function Home( ){
    return (
            <div className="bodyApp">
                        <List
                            userData={ users }
                        />
            </div>
    )
    
}
export default Home;

//Utworzyć route dla ścieżek komponentów