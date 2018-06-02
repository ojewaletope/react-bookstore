import React from 'react';

class Gallery extends React.Component {
  state = {}
  render() {
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let { title, imageLinks, infoLink } = item.volumeInfo;
            return (
              <a 
              key={index} 
              className="book"
              href={infoLink}
              target="_blank"
              >
                <img src={imageLinks !== undefined ? imageLinks.thumbnail : ''} alt="book image" className="book__img"/>
                <div className="book__text">
                  {title}
                </div>
              </a>
            )
          })
        }
      </div>
    );
  }
}

export default Gallery;