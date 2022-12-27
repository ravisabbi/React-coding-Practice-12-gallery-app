// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onChangeImage, isActiveItem} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const changeImage = () => {
    onChangeImage(id)
  }

  const blurClassName = isActiveItem ? '' : 'blur-class'

  return (
    <li className="list-item">
      <button>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${blurClassName}`}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
