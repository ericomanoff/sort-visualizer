import React from 'react'
import Bar from './Bar'
import quickSort from './algorythms/quickSort'

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myArr: [5, 3, 8, 9, 4, 1, 2, 7, 6] };
  }


  render() {
    return <div className="display">
      {
        this.state.myArr.map(el => (
          <Bar key={el} len={el} />
        ))
      }
    </div>
  }
}

export default Display