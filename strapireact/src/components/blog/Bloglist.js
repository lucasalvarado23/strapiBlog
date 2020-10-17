import React from 'react';
import fetch from 'isomorphic-fetch'
import Bloglistitem from '../blog/Bloglistitem'
class Bloglist extends React.Component{

  constructor(){
    super()
    this.state={
      blogs: []
    }
  }

  componentWillMount(){
    fetch('http://localhost:1337/blogs').then((response)=> {
      if(response.status >= 400){
        throw new Error("Bad Response from server");
      }
      return response.json();
    }).then((blogs) => {
      this.setState({blogs: blogs});
    })
  }

  render(){
    return(
      <div>
      {
        this.state.blogs.map(({id, blogtitle, blogcontent, featuredimage, categories}) => (
        <div className="container">
          <div className="row">
              <Bloglistitem key={id} blogid={id} blogtitle={blogtitle} blogcontent={blogcontent} featuredimage={featuredimage} categories={categories} />
           </div>
          </div>
        ))
      }
      </div>
    )
  }
}

export default Bloglist;
