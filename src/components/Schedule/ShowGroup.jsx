import React from 'react'
import PropTypes from 'prop-types'
import { map, propertyOf } from 'lodash'
import Link from 'redux-history-component'
import css from 'cape-style'
// import './ShowItem.css'

import { ShowItem } from './styles'

export const linkMap = propertyOf({
  recL5bU5855qMhQT4: 'recy5OLOvJNnpWuAD',
  reclZwOjZuXJVbRg1: 'recPkxpU5hm2lfIWC',
  recnt8Oz3oN0HBKSH: 'recdoBpSFrFhf1WwX',
})

export function getShowId({ id, key }) {
  return key || linkMap(id) || id
}

function Reception({ date, extra }) {
  return (
    <div>
      <h2 style={css('m0 mt1 mb0')}>Reception:</h2>
      {date}
      {extra && <span><br />{extra}</span>}
    </div>
  )
}
Reception.propTypes = {
  date: PropTypes.string.isRequired,
  extra: PropTypes.string,
}

function ShowGroup({ extraChild, name, program, reception, showDate, ...props }) {
  const showId = getShowId(props)
  return (
    <ShowItem>
      <Link routeId="details" showId={showId} className="block" style={css('textReset')} top>
        <h1 style={css('m0 mb1')}>{ name }</h1>
        {showDate && <h2 style={css('m0 mb1')} className="dateRange">{showDate}</h2>}
        {reception && <Reception date={reception} extra={extraChild && extraChild.reception} />}
        <ul style={css('lsNone mt1 p0')}>
          {program && map(program, (item, key) => <li style={css('mb0p5')} key={key}>{item.name}</li>)}
        </ul>
      </Link>
    </ShowItem>
  )
}

ShowGroup.propTypes = {
  extraChild: PropTypes.shape({
    reception: PropTypes.string,
  }),
  program: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  reception: PropTypes.string,
  showDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
ShowGroup.defaultProps = {
  endDate: '',
  name: '[name here...]',
  program: { name: 'Teaching, MA' },
  showDate: 'February 26–March 13, 2017',
  showName: 'Teaching',
  startDate: '',
}
export default ShowGroup
