// "use client";

// import { Button } from "@/components/ui/button";
// import { Heading } from "@/components/ui/heading";
// import { Loader } from "@/components/ui/loader";
// import { Skeleton } from "@/components/ui/skeleton";

// const Loading = () => {
//   const renderSkeletons = () => {
//     return Array.from({ length: 28 }, (_, index) => (
//       <Skeleton
//         key={index}
//         className=" my-6 mx-3 grid place-self-stretch"
//       ></Skeleton>
//     ));
//   };
//   return (
//     <div className="CONTAINER flex flex-col w-full min-h-[calc(97vh-var(--navbar-height))]">
//       <div className="HEADER w-full h-28">
//         <Heading
//           title={`Services`}
//           description="Manage services for your store"
//         />
//       </div>
//       <div className="TABLE flex-1 grid grid-cols-4 grid-rows-7 place-items-stretch test-border">
//         <div className="GRID-ROW-1 p-2  flex flex-col">
//           <div className="h-1/2 grid place-self-center">Service Name</div>
//           <Skeleton className="h-1/2"></Skeleton>
//         </div>
//         <div className="GRID-ROW-1 p-2  flex flex-col">
//           <div className="h-1/2 grid place-self-center">Service Price</div>
//           <Skeleton className="h-1/2"></Skeleton>
//         </div>
//         <div className="GRID-ROW-1 p-2  flex flex-col">
//           <div className="h-1/2 grid place-self-center">
//             Service Description
//           </div>
//           <Skeleton className="h-1/2"></Skeleton>
//         </div>
//         <div className="GRID-ROW-1 p-2  flex flex-col">
//           <div className="h-1/2"></div>
//           <Button
//             className="h-1/2 w-[65%] grid place-self-center md:mt-auto"
//             type="submit"
//           >
//             Add New
//           </Button>
//         </div>
//         <div className="GRID-ROW-2 h-1/2 p-2 mx-auto">Name </div>
//         <div className="GRID-ROW-2 h-1/2 p-2 mx-auto">Price </div>
//         <div className="GRID-ROW-2 h-1/2 p-2 mx-auto">Description</div>
//         <div className="GRID-ROW-2 h-1/2 p-2 mx-auto">Actions</div>
//         {renderSkeletons()}
//         <Button className="h-1/2 w-[65%]" type="submit">
//           Save
//         </Button>
//       </div>
//       <Skeleton />
//     </div>
//   );
// };

// export default Loading;
