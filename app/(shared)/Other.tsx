import React from "react";
import Card from "app/(shared)/Card";
import { Post } from "@prisma/client";

type Props = {
  otherPosts: Array<Post>;
};

const Other = ({ otherPosts }: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      {/* <div className="sm:grid grid-clos-2 gap-16">
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
      </div> */}
      <div className="sm:grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-8 my-5">
        <Card
          className="col-span-1 row-span-1 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <Card
          className="col-span-1 row-span-1 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <Card
          className="col-span-1 row-span-1 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <Card
          className="col-span-1 row-span-1 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
    </section>
  );
};

export default Other;
