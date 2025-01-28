// "use client";

// import { X } from "lucide-react";
// import { Toaster, toast } from "sonner";
// import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
// import { useState } from "react";
// import { Button } from "./ui/button";
// import ReviewCard from "./ReviewCard";
// import { Textarea } from "./ui/textarea";

// export interface Comment {
//   _id: string;
//   name: string;
//   email: string;
//   message: string;
//   paramsId: number;
// }

// export default function PostCreator({ blog_id }: { blog_id: number }) {
//   const [name, SetName] = useState("");
//   const [email, SetEmail] = useState("");
//   const [message, SetMessage] = useState("");
//   const [cmtArray, setCmtArray] = useState<Comment[]>([
//     { _id: "1", name: "John Doe", email: "john@example.com", message: "Great post!", paramsId: blog_id },
//     { _id: "2", name: "Jane Smith", email: "jane@example.com", message: "Thanks for sharing!", paramsId: blog_id },
//   ]);
//   const [btnName, setBtnName] = useState("Post");
//   const [findCard, setFindCard] = useState<Comment | null>(null);
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Create or update comment
//   const postComment = () => {
//     if (!name || !email || !message) {
//       toast.error("Please fill all the fields");
//       return;
//     }

//     const cardFound = cmtArray.find((comment) => comment._id === findCard?._id);

//     if (cardFound) {
//       // Update comment
//       const updatedComment = { ...cardFound, name, email, message };
//       const updatedArray = cmtArray.map((comment) =>
//         comment._id === cardFound._id ? updatedComment : comment
//       );
//       setCmtArray(updatedArray);
//       resetForm();
//       toast.success("Comment updated successfully");
//     } else {
//       // Post new comment
//       const newComment: Comment = {
//         _id: (cmtArray.length + 1).toString(),
//         name,
//         email,
//         message,
//         paramsId: blog_id,
//       };
//       setCmtArray([...cmtArray, newComment]);
//       resetForm();
//       toast.success("Comment posted successfully");
//     }
//   };

//   // Set fields for updating a comment
//   const setUpdateInputFields = (data: Comment) => {
//     setIsExpanded(true);
//     SetName(data.name);
//     SetEmail(data.email);
//     SetMessage(data.message);
//     setBtnName("Update");
//     setFindCard(data);
//   };

//   // Delete a comment
//   const deleteFunction = (_id: string) => {
//     const updatedArray = cmtArray.filter((comment) => comment._id !== _id);
//     setCmtArray(updatedArray);
//     toast.success("Comment deleted successfully");
//   };

//   // Reset form
//   const resetForm = () => {
//     SetName("");
//     SetEmail("");
//     SetMessage("");
//     setFindCard(null);
//     setBtnName("Post");
//     setIsExpanded(false);
//   };

//   return (
//     <div className="w-full p-6 bg-white border border-[#D4D7E5] rounded-lg">
//       {!isExpanded ? (
//         <div className="flex items-center gap-3">
//           <Avatar className="h-[59px] w-[59px] border-2 border-primary">
//             <AvatarImage src="/images/user.png" alt="User avatar" />
//             <AvatarFallback>User</AvatarFallback>
//           </Avatar>
//           <button
//             onClick={() => setIsExpanded(true)}
//             className="flex-1 h-14 px-4 text-left text-[#565973] font-semibold bg-[#F3F3F3] border border-[#B4B7C9] rounded-[30px] hover:bg-gray-100 transition-colors"
//           >
//             Add your comments here ...
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-5">
//           <div className="flex items-start justify-between">
//             <Avatar className="h-[59px] w-[59px] border-2 border-primary">
//               <AvatarImage src="/images/user.png" alt="User avatar" />
//               <AvatarFallback>User</AvatarFallback>
//             </Avatar>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={resetForm}
//               className="h-11 w-11"
//             >
//               <X className="h-6 w-6" />
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 id="firstName"
//                 placeholder="Enter your first name"
//                 className="bg-[#F3F3F3] border-[#B4B7C9] p-2"
//                 value={name}
//                 onChange={(e) => SetName(e.target.value)}
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 placeholder="Enter your email"
//                 className="bg-[#F3F3F3] border-[#B4B7C9] p-2"
//                 value={email}
//                 onChange={(e) => SetEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           <Textarea
//             placeholder="Write your post or question here"
//             className="min-h-[250px] bg-[#F3F3F3] border-[#B4B7C9] resize-none p-2"
//             value={message}
//             onChange={(e) => SetMessage(e.target.value)}
//           />
//           <div className="flex justify-end">
//             <Toaster richColors />
//             <Button
//               className="w-[161px] bg-pink-500 text-white hover:bg-pink-400 text-[18px]"
//               onClick={postComment}
//             >
//               {btnName}
//             </Button>
//           </div>
//         </div>
//       )}

//       <hr className="my-4" />
//       {cmtArray.map((comment) => (
//         <ReviewCard
//           data={comment}
//           key={comment._id}
//           setUpdateInputFields={setUpdateInputFields}
//           deleteFunction={deleteFunction}
//         />
//       ))}
//     </div>
//   );
// }










"use client";

import { X } from "lucide-react";
import { Toaster, toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import ReviewCard from "./ReviewCard";
import { Textarea } from "./ui/textarea";

export interface Comment {
  _id: string;
  name: string;
  email: string;
  message: string;
  paramsId: number;
}

export default function PostCreator({ blog_id }: { blog_id: number }) {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  const [cmtArray, setCmtArray] = useState<Comment[]>([
    { _id: "1", name: "John Doe", email: "john@example.com", message: "Great post!", paramsId: blog_id },
    { _id: "2", name: "Jane Smith", email: "jane@example.com", message: "Thanks for sharing!", paramsId: blog_id },
  ]);
  const [btnName, setBtnName] = useState("Post");
  const [findCard, setFindCard] = useState<Comment | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Create or update comment
  const postComment = useCallback(() => {
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    const cardFound = cmtArray.find((comment) => comment._id === findCard?._id);

    if (cardFound) {
      // Update comment
      const updatedComment = { ...cardFound, name, email, message };
      const updatedArray = cmtArray.map((comment) =>
        comment._id === cardFound._id ? updatedComment : comment
      );
      setCmtArray(updatedArray);
      resetForm();
      toast.success("Comment updated successfully");
    } else {
      // Post new comment
      const newComment: Comment = {
        _id: (cmtArray.length + 1).toString(),
        name,
        email,
        message,
        paramsId: blog_id,
      };
      setCmtArray([...cmtArray, newComment]);
      resetForm();
      toast.success("Comment posted successfully");
    }
  }, [name, email, message, cmtArray, findCard, blog_id]);

  // Set fields for updating a comment
  const setUpdateInputFields = (data: Comment) => {
    setIsExpanded(true);
    SetName(data.name);
    SetEmail(data.email);
    SetMessage(data.message);
    setBtnName("Update");
    setFindCard(data);
  };

  // Delete a comment
  const deleteFunction = (_id: string) => {
    const updatedArray = cmtArray.filter((comment) => comment._id !== _id);
    setCmtArray(updatedArray);
    toast.success("Comment deleted successfully");
  };

  // Reset form
  const resetForm = () => {
    SetName("");
    SetEmail("");
    SetMessage("");
    setFindCard(null);
    setBtnName("Post");
    setIsExpanded(false);
  };

  return (
    <div className="w-full p-6 bg-white border border-[#D4D7E5] rounded-lg">
      {!isExpanded ? (
        <div className="flex items-center gap-3">
          <Avatar className="h-[59px] w-[59px] border-2 border-primary">
            <AvatarImage src="/images/user.png" alt="User avatar" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex-1 h-14 px-4 text-left text-[#565973] font-semibold bg-[#F3F3F3] border border-[#B4B7C9] rounded-[30px] hover:bg-gray-100 transition-colors"
          >
            Add your comments here ...
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex items-start justify-between">
            <Avatar className="h-[59px] w-[59px] border-2 border-primary">
              <AvatarImage src="/images/user.png" alt="User avatar" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              onClick={resetForm}
              className="h-11 w-11"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                placeholder="Enter your first name"
                className="bg-[#F3F3F3] border-[#B4B7C9] p-2"
                value={name}
                onChange={(e) => SetName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email"
                className="bg-[#F3F3F3] border-[#B4B7C9] p-2"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>
          </div>

          <Textarea
            placeholder="Write your post or question here"
            className="min-h-[250px] bg-[#F3F3F3] border-[#B4B7C9] resize-none p-2"
            value={message}
            onChange={(e) => SetMessage(e.target.value)}
          />
          <div className="flex justify-end">
            <Toaster richColors />
            <Button
              className="w-[161px] bg-pink-500 text-white hover:bg-pink-400 text-[18px]"
              onClick={postComment} // Calling the callback function
            >
              {btnName}
            </Button>
          </div>
        </div>
      )}

      <hr className="my-4" />
      {cmtArray.map((comment) => (
        <ReviewCard
          data={comment}
          key={comment._id}
          setUpdateInputFields={setUpdateInputFields}
          deleteFunction={deleteFunction}
        />
      ))}
    </div>
  );
}
