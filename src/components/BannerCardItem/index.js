// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {BannerCards} = props
  const {headerText, description, className} = BannerCards
  return (
    <li className={`${className} banner-card-item`}>
      <div className="list-container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="show-more-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
