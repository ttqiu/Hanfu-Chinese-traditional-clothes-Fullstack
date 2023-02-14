const StoreCard = (props) => {

  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.logo} alt="Store" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
      </div>
    </div>
  )
}


export default StoreCard