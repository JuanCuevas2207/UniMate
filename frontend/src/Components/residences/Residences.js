import { Component } from 'react'
import Residence from './Residence';
import residenceStyles from './Residence.module.css';

class Residences extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'row justify-content-center'}>
          {Object.values(this.props.residenceList).map(data => <Residence key={data.id}  {...data} />)}
        </div>
      </div>
    )
  }
}

export default Residences;