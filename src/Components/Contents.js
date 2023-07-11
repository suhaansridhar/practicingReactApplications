function Contents({contents}){
    return(
        <div className="contents--container">
            {contents.map(item => {
                return(
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <h4>{item.contents}</h4>
                    </div>
                )
            })}
        </div>
    )
}
export default Contents;