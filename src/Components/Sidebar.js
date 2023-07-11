function Sidebar(){
    return(
        <div className="sidebar--container">
            <div className="sidebar--container--01">
                <ul>
                    <li>Home</li>
                    <li>Shorts</li>
                    <li>Subscriptions</li>
                    <li><hr /></li>
                </ul>
            </div>
            <div className="sidebar--container--02">
                <ul>
                    <li>Library</li>
                    <li>History</li>
                    <li>Your videos</li>
                    <li>Watch Later</li>
                    <li>Liked videos</li>
                    <li>show more</li>
                    <li><hr /></li>
                </ul>
            </div>
            <div className="sidebar--container--03">
                <ul>
                    <li>Subscriptions</li>
                    <li>Al Jazeera</li>
                    <li>iJustine</li>
                    <li>Apple</li>
                    <li>Google</li>
                    <li>Microsoft</li>
                    <li>Amazon</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;