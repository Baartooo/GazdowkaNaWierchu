import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/Layout'

class RootIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          textAlign: 'center',
        }}>
          <span>Gazdówka na Wierchu - strona w budowie <br /> <a
            href={'https://www.facebook.com/Gazd%C3%B3wka-na-Wierchu-114668290408693'}>Zapraszamy na nasz Facebook</a></span>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

