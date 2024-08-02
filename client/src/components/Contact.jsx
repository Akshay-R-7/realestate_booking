import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleChange = (e) => {
    setMessage(e.target.value)
  };
  const encodedMessage = encodeURIComponent(message);
  const subject = encodeURIComponent(`Regarding ${listing.name}`);
  
  return (
    <div>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            placeholder="Enter you Message here..."
            className="w-full border p-3 rounded"
            value={message}
            onChange={handleChange}
          />
           <a
            href={`mailto:${landlord.email}?subject=${subject}&body=${encodedMessage}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </a>
        </div>
      )}
    </div>
  );
}
