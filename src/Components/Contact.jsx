import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => 
       {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
       try{
        await axios.post('https://getform.io/f/bgdyjwna', userInfo)
        toast.success("your message has been sent")
       }
       catch(err){
        console.log(err);
        toast.error("something went wrong")
       }
    }
      return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-15'>
        <div>
        <div class="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
            <h1 class="text-3xl text-gray-800 font-extrabold text-center">Contact us</h1>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            // action='https://getform.io/f/bgdyjwna'
            // method="POST"
            class="mt-8 space-y-4">
                <input type='text' name='name' placeholder='Name'
                    {...register("name", { required: true })} 
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                {errors.name && <span>This field is required</span>}
                <input type='email' name='email' placeholder='Email'
                    {...register("email", { required: true })} 
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                     {errors.email && <span>This field is required</span>}
                <input type='text' name='subject' placeholder='Subject'
                    {...register("subject", { required: true })} 
                    class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                     {errors.subject && <span>This field is required</span>}
                <textarea placeholder='Message' name='message' rows="6"
                    {...register("message", { required: true })} 
                    class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                     {errors.message && <span>This field is required</span>}
                <button type='submit'
                    class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact