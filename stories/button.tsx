import * as React from 'react'
// import { action } from '@storybook/addon-actions';

export default class extends React.Component<any, any> {
  render() {
    return <button onClick={() => { console.log(222)}}>Hello Button</button>
  }
}