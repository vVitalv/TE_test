import { PureComponent, memo } from 'react';

// functional component
 const FirstComponent = ({ name }) => (
    <div>my name is {name}</div>
)
export default memo(FirstComponent)

// class component
class SecondComponent extends PureComponent {
  render() {
    return <div>my name is {this.props.name}</div>;
  }
}
