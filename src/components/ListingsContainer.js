import React, { useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchItem}) {
  const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  }, [])

  //add claback function to update emoji status 
  function handleUpdateEmoji(updatedEmoji) {
    const updatedEmojis = listings.map((listing) => {
      if(listing.id === updatedEmoji.id) {
        return updatedEmoji
      } else {
        return listing
      }
    })
    setListings(updatedEmojis)
  }

  //add callback function to delete listing
  function handleDeleteListing(deleteListing) {
    const updatedListing = [...listings].filter((listing) => listing.id !==deleteListing.id)
    setListings(updatedListing)
  }

  //Search functionality: Use filter 
  const filteredListings = [...listings].filter((listing) =>
    listing.description.toLowerCase().includes(searchItem.toLowerCase())
  );


  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard 
            key={listing.id}
            listing ={listing}
            onUpdateEmoji={handleUpdateEmoji}
            onDeleteListing={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
