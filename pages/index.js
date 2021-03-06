import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'isomorphic-unfetch'

import Layout from '../components/layout'
import Event from '../components/event'

const apiURL = process.env.API_URL

export default class extends React.Component {

  static async getInitialProps() {
    const res = await fetch(`${apiURL}/events?query={event(uuid:%22%22){title,image,description,url,uuid,price,date,rawDate}}`)
    const events = await res.json()
    return { events }
  }

  renderEvents() {
    const { events } = this.props;
    if (events && events.data && events.data.event && events.data.event.length) {
      return events.data.event.map((event) => <Event event={event} key={event.uuid} />);
    }
    return null;
  }

  render() {
    return (<Layout>
      {this.renderEvents()}
    </Layout>);
  }
}
