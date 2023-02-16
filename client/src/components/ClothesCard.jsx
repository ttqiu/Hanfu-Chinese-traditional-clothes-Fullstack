const ClothesCard = (props) => {

  return (
    <div className="clothes-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="clothes-card" />
      </div>
      <div className="info-wrapper flex-row space">
        <h3>{props.name}</h3>
        <h3>{props.category}</h3>
      </div>
    </div>
  )
}

export default ClothesCard
