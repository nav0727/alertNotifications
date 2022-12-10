import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {notificationItem} = props
  const {logoUrl, heading, description, altName, styleName} = notificationItem

  return (
    <li>
      <div className="container">
        <div alt={altName} className={`${styleName} logo`}>
          {logoUrl}
        </div>
        <div className="con">
          <h1 className={styleName}>{heading}</h1>
          <p>{description}</p>
        </div>
      </div>
      <GrFormClose alt="close" />
    </li>
  )
}

export default Notification
