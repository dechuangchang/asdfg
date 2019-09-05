import "../less/index.less";
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { DatePicker } from 'antd';

export default class extends React.Component {
  
  componentDidMount(){

  }
  render() {
    return (
      <div className='index'>
        <Head>
          <title>index</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        
        
        <Link  href='/about'>
          <a>about</a>
        </Link>

        <DatePicker />
      </div>
    )
  }
}