import React from 'react'
import clientPromise from '@/lib/mongodb';
import { redirect } from 'next/navigation';

const page = async({params}) => {
    const shortUrl=(await params).slug;

    let client= await clientPromise
    let db=client.db("bitlinks")
    const collection=db.collection("url")

    let check=await collection.findOne({shortUrl:shortUrl});
    if (check){
        redirect(check.url);
    }
    // else{
    //     redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    // }
  return (
    <div>
      {shortUrl}
    </div>
  )
}

export default page

