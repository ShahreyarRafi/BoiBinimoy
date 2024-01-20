"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";


const BlogPage = () => {
 const blogs = [
    {
        id:1,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: " Lyft launching cross-platform service this week",
        date: "december 18, 2024"
    },
    {
        id:2,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: " Lyft launching cross-platform service this week",
        date: "december 18, 2024"
    },
    {
        id:3,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: " Lyft launching cross-platform service this week",
        date: "december 18, 2024"
    },
    {
        id:4,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: " Lyft launching cross-platform service this week",
        date: "december 18, 2024"
    },
    {
        id:5,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: " Lyft launching cross-platform service this week",
        date: "december 18, 2024"
    },
    {
        id:6,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: " Lyft launching cross-platform service this week",
        date: "december 18, 2024"
    },
 ];

  return (
    <div className="mt-10">
      <div className=" flex justify-center">
        <Card className="w-full max-w-[48rem] flex-row gap-3 p-6">
          <div className="m-0 w-2/5 shrink-0 rounded-r-none">
            <Image
              width={600}
              height={600}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <p className="mb-4 uppercase">startups</p>
            <p className="mb-2">
              Lyft launching cross-platform service this week
            </p>
            <p className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </p>
            <a href="#" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 text-white bg-orange-500 px-4 py-2 rounded-xl "
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </Card>
      </div>
      <div className=" mt-10 md:max-w-[80%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-3">
       {
       blogs.map(blog =>  <Card key={blog.id} className="max-w-[340px] overflow-hidden">
       <CardHeader
         floated={false}
         shadow={false}
         color="transparent"
         className="m-0 rounded-none"
       >
         <Image
           width={500}
           height={500}
           src={blog.image}
           alt="ui/ux review check"
         />
       </CardHeader>
       <CardBody>
         <Typography variant="h4" color="blue-gray">
          {blog.title}
         </Typography>
         <hr></hr>
         <span className="mt-2">
              <p>{blog.date}</p>
         </span>
       </CardBody>
     </Card>) 
       }
      </div>
    </div>
  );
};

export default BlogPage;