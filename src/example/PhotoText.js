import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
class PhotoText extends Component {

  render() {
    const {name, job} = this.props;
    return (
      <div>
        <Button primary> {name} 입니다</Button>
        <Button secondary>{job} 입니다</Button>
      </div>
    );
  }
}

export default PhotoText;
