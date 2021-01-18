function Bar(props) {
  const divStyle = {
    width: `${10 * props.len}vw`
  }
  return (
    <div className={`bar`} style={divStyle}>
    </div >
  )
}

export default Bar