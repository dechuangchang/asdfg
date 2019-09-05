import "../less/index.less";
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default class extends React.Component {
 
  componentDidMount(){

  }
  render() {
    return (
      <div className='index'>
        <Head>
          <title>about</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
       
        <Link  href='/index'>
          <a>index</a>
        </Link>

        <Collapse defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}