// @flow

import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../core-ui/Button';
import {connect} from 'react-redux';

type Props = {
  counter: number,
  handleIncrease: () => void,
  handleSubmit: (value: number) => void,
};

type State = {
  number: number,
};

class Homepage extends Component<Props, State> {
  state = {
    number: 1,
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> {this.props.counter}</Text>
        <Button text={'Increase'} onPress={this.props.handleIncrease} />
        <TextInput
          keyboardType="numeric"
          style={{
            backgroundColor: '#dddf',
            alignSelf: 'stretch',
            borderRadius: 2,
            borderWidth: 1,
            margin: 10,
          }}
          value={this.state.number.toString()}
          onChangeText={(value) => this.setState({number: Number(value)})}
        />
        <Button
          text={'Submit'}
          onPress={() => this.props.handleSubmit(this.state.number)}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrease: () => dispatch({type: 'INCREASE_NUMBER'}),
    handleSubmit: (value: number) =>
      dispatch({type: 'SUBMIT_NUMBER', payload: value}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

const styles = {
  mainContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
