import React, { Component } from 'react'
import {CSVReader} from 'react-papaparse'
import {Card} from 'react-bootstrap'

export default class UploadParse extends Component {
  handleOnDrop = (data:any) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  handleOnError = (err:any, file:any, inputElem:any, reason:any) => {
    console.log(err)
  }

  handleOnRemoveFile = (data:any) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  render() {
    return (
      <Card>
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          addRemoveButton
          removeButtonColor='#659cef'
          onRemoveFile={this.handleOnRemoveFile}
          >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
      </Card>
    )
  }
}
