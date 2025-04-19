import React, { useState } from "react";

function ListingCard({listing, onUpdateEmoji, onDeleteListing}) {
  const {description, image, location} = listing
  const [isLiked, setIsLiked] = useState(false)

  function handleEmojiClick() {
    const updatedLikeStatus = !isLiked //toggle between the like status
    setIsLiked(updatedLikeStatus) //update state

    fetch(`http://localhost:6001/listings/${listing.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
          isLiked: updatedLikeStatus //body has "new" like status 
        }),
    })
    .then((r) => r.json())
    .then((updatedEmoji) => onUpdateEmoji(updatedEmoji))
  }

  //handle delete btn clicks
  function handleDeleteClick() {
   fetch(`http://localhost:6001/listings/${listing.id}`, {
    method:"DELETE",
   })
   .then((r) => r.json())
   .then(() => onDeleteListing(listing))
  }
 
  return (
    <li  className="card">
      <div className="image"> 
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleEmojiClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleEmojiClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
