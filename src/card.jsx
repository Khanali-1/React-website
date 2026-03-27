function Card({item,onClick}){
    return(
        <>
        <div className="card" onClick={onClick}>
              <h2>{item.title}</h2>
              <p>{item.salary}</p>
              <p><b>Company Name :</b>{item.company?.display_name}</p>
              <p><b>Location :</b>{item.location?.display_name}</p>
              <p>{item.type}</p>
              <p><b>Description</b> <br></br>{item.description}</p>
              <a href={item.redirect_url} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
        </div>
        </>
    )
}


export default Card