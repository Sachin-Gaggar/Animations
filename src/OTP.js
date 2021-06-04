import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class OTPInputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (text) => {
    this.props.notNumber(false);
    isNaN(text)
      ? this.props.notNumber(true)
      : this.props.onChangeText(text, this.props.otpNumber);
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: '#EEE',
          width: 32,
          height: 38,
          margin: 5,
          alignItems: 'center',
        }}>
        <TextInput
          style={{flex: 1, alignSelf: 'stretch', textAlign: 'center'}}
          maxLength={1}
          keyboardType={'numeric'}
          value={isNaN(this.props.value) ? '' : this.props.value.toString()}
          ref={(r) => this.props.Refrence(r)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              this.props.goBack(this.props.otpNumber);
            }
          }}
          onChangeText={(text) => {
            this.onChange(text);
          }}
        />
      </View>
    );
  }
}
const otp = 123456;
class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: [],
      otpLength: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
      ],
      error: false,
      length: 0,
      back: true,
    };
    this.otpRefrence = [];
  }
  onSubmit = () => {
    let {otp} = this.state;
    let number = otp.reduce((acc, cum) => {
      return (acc = acc * 10 + cum);
    });
    alert(number);
  };
  otp = (text, otpNumber) => {
    let {otp, length, back} = this.state;

    if (text === '') {
      otp[otpNumber - 1] = '';
      length -= 1;
      back = true;
    } else {
      if (otpNumber != this.state.otpLength.length) {
        otp[otpNumber - 1] = +text;
        this.otpRefrence[otpNumber].focus();
        back = false;
        length += 1;
      } else {
        otp[otpNumber - 1] = +text;

        back = false;
        length += 1;
      }
    }
    this.setState({otp, length, back});
    if (length === this.state.otpLength.length) {
      this.onSubmit();
    }
  };
  back = (otpNumber) => {
    if ((otpNumber !== 1) & this.state.back) {
      this.otpRefrence[otpNumber - 2].focus();
      if (
        this.state.otp[otpNumber - 2] !== '' &&
        this.state.otp[otpNumber - 2] !== undefined
      ) {
        this.setState({back: false});
      }
    } else {
      this.setState({back: true});
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {this.state.otpLength.map((item, index) => {
              return (
                <OTPInputBox
                  otpNumber={item.id}
                  goBack={(n) => this.back(n)}
                  value={this.state.otp[index]}
                  notNumber={(variable) => this.setState({error: variable})}
                  Refrence={(r) => (this.otpRefrence[index] = r)}
                  onChangeText={(text, otpNumber) => this.otp(text, otpNumber)}
                />
              );
            })}
          </View>
          <ErrorLine error={this.state.error} />
        </View>

        <Submit onSubmit={() => this.onSubmit()} />
      </SafeAreaView>
    );
  }
}
const ErrorLine = (props) => (
  <View style={{display: props.error ? 'flex' : 'none'}}>
    <Text style={{fontSize: 12, color: 'red'}}>Not a number</Text>
  </View>
);

const Submit = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={props.onSubmit}
        style={{backgroundColor: '#876', padding: 10}}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTP;
