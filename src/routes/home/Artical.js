import React from 'react';
import { Card } from 'antd'
import Classification from './components/Classification'

function ArticalCard(props) {
  const {artical} = props;
  return (
    <Card
      key={artical.id}
      hoverable
      title={artical.title}
      style={{marginBottom: 20}}
    >
      <p>{artical.intro}</p>
      {
        artical.classify.map(item => {
          return (
            <Classification name={item}></Classification>
          )
        })
      }
    </Card>
  )
}

export default ArticalCard