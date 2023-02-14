const ClothesCard = (props) => {

  return (
    <div className="card clothes-card">
      <div className="img-wrapper">
        <img src={props.image} alt="Clothes" />
      </div>
      <div className="info-wrapper flex-row space">
        <h3>{props.name}</h3>
        <h3>{props.store}</h3>
      </div>
    </div>
  )
}

export default ClothesCard
