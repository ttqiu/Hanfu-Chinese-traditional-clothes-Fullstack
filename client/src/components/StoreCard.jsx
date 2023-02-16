const StoreCard = (props) => {

  return (
    <div className="store-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.logo} alt="store-logo" />
      </div>
      <div className="info-wrapper flex-row">
        <h3>{props.name}</h3>
        {/* <h4>{props.city}</h4> */}
      </div>
    </div>
  )
}


export default StoreCard