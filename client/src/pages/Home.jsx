import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from '../components/ListingItem'

export default function Home() {
  SwiperCore.use([Navigation]);
  const [offerLisitngs, setOfferLisitng] = useState([]);
  const [saleLisitngs, setSaleLisitng] = useState([]);
  const [rentalLisitngs, setRentalLisitng] = useState([]);
  console.log(saleLisitngs);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/getListing?offer=true&limit=4`);
        const data = await res.json();
        setOfferLisitng(data);
        fetchRentLisitngs();
      } catch (err) {
        console.log(err);
      }
    };
    const fetchRentLisitngs = async () => {
      try {
        const res = await fetch(`/api/listing/getListing?type=rent&limit=4`);
        const data = await res.json();
        setRentalLisitng(data);
        fetchSaleLisitngs();
      } catch (err) {
        console.log(err);
      }
    };
    const fetchSaleLisitngs = async () => {
      try {
        const res = await fetch(`/api/listing/getListing?type=sale&limit=4`);
        const data = await res.json();
        setSaleLisitng(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find you next <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Akshay Estate is the best place to find your nexxt perfect place to
          live.
          <br />
          We have a wide range of properties forr you to choose from.
        </div>
        <Link
          to={`/search`}
          className="text-xs sm:text-sm text-blue-800 hover:underline font-bold"
        >
          Lets get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerLisitngs &&
          offerLisitngs.length > 1 &&
          offerLisitngs.map((listing) => (
            <SwiperSlide>
              <div
                className="h-[500px]"
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing result for offer, sake and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          {offerLisitngs && offerLisitngs.length > 0 &&(
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">Recent Offers</h2>
                <Link to={`/search?offer=true`} className="text-sm text-blue-800 hover:underline">
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {offerLisitngs.map((listing)=>(
                  <ListingItem key={listing._id} listing={listing} />
                ))}
              </div>
            </div>
          )}
          {rentalLisitngs && rentalLisitngs.length > 0 &&(
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">Recent places for rent</h2>
                <Link to={`/search?type=rent`} className="text-sm text-blue-800 hover:underline">
                  Show more places for rent
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {rentalLisitngs.map((listing)=>(
                  <ListingItem key={listing._id} listing={listing} />
                ))}
              </div>
            </div>
          )}
          {saleLisitngs && saleLisitngs.length > 0 &&(
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">Recent places for sale</h2>
                <Link to={`/search?type=sale`} className="text-sm text-blue-800 hover:underline">
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {saleLisitngs.map((listing)=>(
                  <ListingItem key={listing._id} listing={listing} />
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
