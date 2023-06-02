import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from "sweetalert2";

const BookingForm = () => {
  const {user} = useContext(AuthContext)
    const movieInfo = useLoaderData();
    const {_id, show}= movieInfo;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
  const handleBooking =(data)=>{
    fetch('http://localhost:5000/bookTicket',{
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(data=>{
    const bookingData = {
      name: show.name,
      quantity: data.quantity,
      buyerName: user?.displayName,
      email: user?.email
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    Swal.fire("Added!", "Your post has been Added.", "success");
    console.log(data)

})
    


  }
    return (
        <div>

        <h4 className="text-center text-3xl my-6 font-bold text-yellow-950">Book a ticket</h4>
        <div className='bg-blue-100 rounded-md px-16 py-12 w-full my-16 container mx-auto'>
        <form onSubmit={handleSubmit(handleBooking)}>
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      
          <input
            className="input-color p-4 rounded-md"
            {...register("name")}
            placeholder="name"
            type="text"
            value={show.name}
          />
  
          <input
            className="input-color p-4 rounded-md"
            {...register("quantity", { required: true })}
            placeholder="quantity"
            type="number"
          />
          <input
            className="input-color p-4 rounded-md"
            {...register("buyerName")}
            placeholder="Your name"
            value={user?.displayName}
          />
          <input
            className="input-color p-4 rounded-md"
              value={user?.email}
            {...register("Email")}
            placeholder="email"
            type="email"
          />
        </div>
        <div>
        <input className="container mx-auto grid grid-cols-1 my-5 bg-yellow-900 btn btn-block text-amber-50 p-4 rounded-md" value="Confirm Ticket" type='submit' />
        </div>
        
      </form>
        </div>
        </div>
    );
};

export default BookingForm;