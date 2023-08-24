// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewsIndex: 0}

  getReview = reviewsList => {
    const {activeReviewsIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewsIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewsIndex} = this.state

    if (activeReviewsIndex > 0) {
      this.setState(prevState => ({
        activeReviewsIndex: prevState.activeReviewsIndex - 1,
      }))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeReviewsIndex} = this.state

    if (activeReviewsIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewsIndex: prevState.activeReviewsIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewsIndex} = this.state
    console.log(activeReviewsIndex)

    return (
      <div className="app-container">
        <button
          type="button"
          data-testid="leftArrow"
          onClick={this.onLeft}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          type="button"
          data-testid="rightArrow"
          onClick={this.onRight}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
