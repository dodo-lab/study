import React from 'react';
import { FancyButton } from './FancyButton';

type Props = {
  firstName: string;
  userId: string;
};

type State = {
  isLoading: boolean;
};

export class SignUpForm extends React.Component<Props, State> {
  state = {
    isLoading: false,
  };
  render() {
    return (
      <>
        <h2>
          Sign up for a 7-day supply of our tasty toothpaste now,{' '}
          {this.props.firstName}
        </h2>
        <FancyButton
          isDisabled={this.state.isLoading}
          size="Big"
          text="Sign Up Now"
          onClick={this.signUp}
        />
      </>
    );
  }

  private signUp = async () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  };
}
