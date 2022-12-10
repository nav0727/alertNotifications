import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  state = {
    notificationsList: [
      {
        logoUrl: <AiFillCheckCircle />,
        heading: 'Success',
        altName: 'Success',
        description: 'You can access all the files in the folder',
        styleName: 'success',
      },
      {
        logoUrl: <RiErrorWarningFill />,
        heading: 'Error',
        altName: 'Error',
        description:
          'Sorry, you are not authorized to have access to delete the file',
        styleName: 'error',
      },
      {
        logoUrl: <MdWarning />,
        heading: 'Warning',
        altName: 'Warning',
        description: 'Viewers of this file can see comments and suggestions',
        styleName: 'warning',
      },
      {
        logoUrl: <MdInfo />,
        heading: 'Info',
        altName: 'Info',
        description: 'Anyone on the internet can view these files',
        styleName: 'info',
      },
    ],
  }

  render() {
    const {notificationsList} = this.state
    return (
      <div className="bg-con">
        <h1>Alert Notifications</h1>
        <ul>
          {notificationsList.map(each => (
            <Notification key={each.id} notificationItem={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
