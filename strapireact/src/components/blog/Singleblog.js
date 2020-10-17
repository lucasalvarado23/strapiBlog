import React from 'react';
import fetch from 'isomorphic-fetch';

class SingleBlog extends React.Component{

  constructor(){
    super()
    this.state={
      SingleBlog: [],
      BlogImage: ''
    }
  }

  componentWillMount(){
    fetch(`http://localhost:1337/blogs/${this.props.match.params.postid}`).then((response)=> {
      if(response.status >= 400){
        throw new Error("Bad Response from server");
      }
      return response.json();
    }).then((blog) => {
      this.setState({SingleBlog: blog});
      this.setState({BlogImage: blog.featuredimage.url});
    })
  }

  render(){
    const {id, blogtitle, blogcontent, categories} = this.state.SingleBlog;
    return(
      <div className="jumbotron">
        <h1 className="display-8">{blogtitle}</h1>
        <img src={`http://localhost:1337${this.state.BlogImage}`} alt="" />
        <p className="lead">{blogcontent}</p>
       </div>
    )
  }
}

export default SingleBlog;
