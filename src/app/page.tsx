import { Card } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import {client,urlFor} from "./lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == 'blog']{
  title,
  shortDescription,
  titleImage
}`;


const data = await client.fetch(query);

return data;

}

export default async function Home() {

  const data: simpleBlogCard[] = await getData();

 console.log(data)
  return (
    <div className="container mx-auto">
         <div className="className='w-fit grid grid-cols-1 items-center
           justify-between mx-auto px-4' gap-10  md:grid-cols-2">

              {data.map((post,idx)=>(
              <Card key={idx} className="bg-red-200">

                  <Image src={urlFor(post.titleImage).url()} alt=""
                      width={250} height={150} className="rounded-lg "/>
                <div className="flex flex-col  items-start">
                        <h1>{post.title}</h1>
                      
                      <div>
                        {post.shortDescription}
                      </div>
                
                </div>
                
              </Card>
              ))}

        </div>
    </div>
   
  );
}
