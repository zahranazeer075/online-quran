import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    country: "",
    course: "",
    message: "",
  });


  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {

    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }));

  };



  const handleSubmit=(e)=>{

    e.preventDefault();

    console.log(formData);

    setSubmitted(true);


    setTimeout(()=>{
      setSubmitted(false);
    },4000);


  };



return (

<section className="bg-gray-50 pt-32 pb-16 px-4">

<div className="max-w-7xl mx-auto">


{/* Heading */}

<div className="text-center mb-16">


<button
className="
bg-green-700
text-white
px-6
py-3
rounded-full
text-base
font-medium
mb-4
"
>
📖 Start Your Quran Journey
</button>



<h2 className="
text-5xl
font-bold
mt-6
text-gray-900
">

Contact 
<span className="text-green-700">
 Our Academy
</span>

</h2>



<p
className="
text-lg
text-gray-500
mt-4
max-w-2xl
mx-auto
"
>

Get in touch with our certified Quran teachers and start your
spiritual learning journey today

</p>


</div>




<div className="
grid
lg:grid-cols-2
gap-10
mt-6
">



{/* LEFT */}


<div>


<div className="space-y-5">



<div className="
bg-white
rounded-3xl
p-7
shadow-lg
hover:shadow-xl
transition
">

<h3 className="text-xl font-bold flex gap-2 items-center">
<IoCall/>
Call Us
</h3>


<p className="
text-green-700
text-lg
font-bold
mt-2
">

+92 300 6868033

</p>


<p className="text-gray-500 mt-2">
Available 24/7 for your queries
</p>


</div>





<div className="
bg-white
rounded-3xl
p-7
shadow-lg
hover:shadow-xl
transition
">

<h3 className="text-xl font-bold flex gap-2 items-center">

<FaWhatsapp/>

WhatsApp

</h3>


<p className="text-green-700 text-lg font-bold mt-2">

+92 300 6868033

</p>


<p className="text-gray-500 mt-2">

Quick response within minutes

</p>


</div>





<div className="
bg-white
rounded-3xl
p-7
shadow-lg
hover:shadow-xl
transition
">


<h3 className="text-xl font-bold flex gap-2 items-center">

<MdOutlineEmail/>

Email Us

</h3>


<p className="text-green-700 text-lg font-bold mt-2">

info@a-hafiz.com

</p>


<p className="text-gray-500 mt-2">

We reply within 2 hours

</p>


</div>



</div>





<div className="
grid
grid-cols-2
gap-5
mt-6
">



{
[
["Certified Teachers","Learn from qualified Islamic scholars"],
["24/7 Available","Flexible timing for all students"],
["Safe Environment","Secure and comfortable learning"],
["5-Star Rating","Highly rated by 1000+ students"]

].map((item,index)=>(


<div
key={index}
className="
bg-white
p-7
rounded-3xl
shadow-lg
text-center
"
>


<h4 className="font-bold text-lg">
{item[0]}
</h4>


<p className="text-gray-500 mt-3">
{item[1]}
</p>


</div>


))
}



</div>



</div>







{/* FORM */}



<div className="
bg-white
p-10
rounded-[32px]
shadow-xl
">



<h3 className="text-3xl font-bold text-center">

Get Free Trial

</h3>



<p className="
text-gray-500
text-center
mt-3
mb-8
">

Fill the form below to get your first free Quran class

</p>





<form
onSubmit={handleSubmit}
className="space-y-5"
>




<div className="grid md:grid-cols-2 gap-4">


<input
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
className="inputStyle"
/>



<input
name="fatherName"
placeholder="Father's Name"
value={formData.fatherName}
onChange={handleChange}
className="inputStyle"
/>


</div>





<input
name="phone"
placeholder="Phone Number"
value={formData.phone}
onChange={handleChange}
className="inputStyle"
/>





<input
name="email"
placeholder="Email Address"
value={formData.email}
onChange={handleChange}
className="inputStyle"
/>





<input
name="country"
placeholder="Enter your country"
value={formData.country}
onChange={handleChange}
className="inputStyle"
/>





<select
name="course"
value={formData.course}
onChange={handleChange}
className="inputStyle"
>


<option>
Select your course
</option>


<option>
Quran Reading (Nazra)
</option>


<option>
Quran Memorisation (Hifz)
</option>


<option>
Tajweed
</option>


<option>
Islamic Studies
</option>


</select>





<textarea

rows="5"

name="message"

placeholder="Tell us about your Quran learning goals..."

value={formData.message}

onChange={handleChange}

className="inputStyle"

/>






<button

className="
w-full
py-4
rounded-xl
text-white
font-bold
text-lg
bg-green-700
hover:bg-green-800
"

>


{
submitted
?
"Submitted Successfully"
:
"Start Learning Now"
}


</button>



<p className="text-center text-sm text-gray-500">

🔒 Your information is 100% secure and confidential

</p>




</form>



</div>



</div>


</div>


</section>

);

};


export default Form;