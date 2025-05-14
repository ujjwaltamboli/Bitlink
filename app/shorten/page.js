"use client"
// import { Code } from 'mongodb';
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [url, seturl] = useState("");
    const [shortUrl, setshortUrl] = useState("");
    const [generated, setgenerated]=useState("");

    const takeInput=async(e)=>{
        const res=await fetch("/api/generate",{method:"POST",
          headers:{"content-type":"application/JSON"},
          body:JSON.stringify({"url":url,"shortUrl":shortUrl})
        })

        const data=await res.json();
        if (data.success){
          setgenerated(shortUrl); 
          alert("Url generated successfully")
        }
        else{
          setgenerated("");
          alert("This url is already in use")
        }


        seturl("");
        setshortUrl("");
    }
  return (
    

    <div className="m-auto my-10 bg-fuchsia-200 p-12 lg:w-[30%] md:w-[70%] w-[100%] rounded-md">
        <div className='flex flex-col gap-2  mx-auto'>
            <h1 className='font-bold'>Generate your Short URLs</h1>
            <input value={url} placeholder="Enter your URL " onChange={(e)=>{seturl(e.target.value)}} className='bg-white px-3 py-1' type="text" />
            <input value={shortUrl} placeholder="Enter your preferred short url" onChange={(e)=>{setshortUrl(e.target.value)}} className='bg-white px-3 py-1' type="text" />
            <button onClick={takeInput} className='bg-fuchsia-800 text-white rounded-lg'>Generate</button>
        </div>
        <div>
          <p>Your new URL</p>
          {generated && <code>
            <Link target=" _" href={generated}>
            {`${process.env.NEXT_PUBLIC_HOST}${generated}`}
            </Link>
            </code>
            }
        </div>
    </div>
    
  )
}

export default page
