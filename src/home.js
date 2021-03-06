import React, { Component } from 'react'
import moment from 'moment'

export default class Home extends Component {
  render () {
    const { posts } = this.props

    return (
      <section className='recent-posts'>
        {posts.map(post => {
          let date = moment(post.date)
          return (
            <article key={date}>
              <time dateTime={date.format('YYYY-MM-DD HH:mm')}>{date.format('D MMM YYYY')}</time>
              <h1><a href={post.url}>{post.title}</a></h1>
              <div className='preview' dangerouslySetInnerHTML={{__html: post.preview}}></div>
              <a href={post.url}>keep reading »</a>
            </article>
          )
        })}

        <footer>
          <a href='/blog/all'>list of all posts</a>
        </footer>
      </section>
    )
  }
}
