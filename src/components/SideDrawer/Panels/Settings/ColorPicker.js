import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { connect } from 'react-redux'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({   color: color.rgb })
    const colorInfo = { identifier : this.props.identifier , color : color.hex , name : this.props.name }
    this.props.onColorChanged(colorInfo);
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '20px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'relative',
          zIndex: '100000000',
        },
        cover: {
          position: 'fixed',
          marginRight:"20px",
          top: '0px',
          right: '200px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onColorChanged : (colorInfo) => dispatch({type: 'COLORCHANGED', payload: colorInfo}),
  };
};

export default  connect(null, mapDispatchToProps) (ColorPicker);