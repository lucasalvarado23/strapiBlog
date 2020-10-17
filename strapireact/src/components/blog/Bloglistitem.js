import React from 'react';
import {link} from 'react-router-dom';

const Bloglistitem = ({blogid, blogtitle, blogcontent, featuredimage, categories}) => {
  const category = categories.map((category) => {
    return category.categoryname
  })

  return(
    <div className="col-12">
    <div className="card border-secondary mb-3">
      <div className="card-header">{category}</div>
      <div className="card-body">
          <img src={`http://localhost:1337${featuredimage.formats.medium.url}`} />
          <h4 className="card-title">{blogtitle}</h4>
    </div>
    <link to={`/single/${blogid}`} className="btn btn-primary btn-lg">Learn More</link>
    </div>

    </div>
  )
}

export default Bloglistitem;
