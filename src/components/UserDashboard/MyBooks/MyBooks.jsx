"use client"


import { useState } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import useSpecificUserBook from '@/Hooks/api/useSpecificUserBook';
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
import Link from 'next/link';

const MyBooks = () => {
    const [specificBooks, refetch, isLoading] = useSpecificUserBook();
    const axiosSecure = useAxiosSecure();

    const handleBookDelete = (id, title) => {
        Swal.fire({
            title: `Delete Book`,
            text: `Are you sure you want to delete the book "${title}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/buy-books/${id}`)
                    .then(response => {
                        console.log(response.data);
                        if (response.data) {
                            Swal.fire(
                                'Deleted!',
                                `Your book "${title}" has been deleted.`,
                                'success'
                            );
                            refetch();
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting Book:', error);
                        Swal.fire(
                            'Error!',
                            'An error occurred while deleting the book.',
                            'error'
                        );
                    });
            }
        });
    };

    if (isLoading) {
        return (
            <div><span className="loading loading-ball loading-lg"></span></div>
        );
    }

    if (specificBooks.length === 0) {
        return (
            <div>
                <h1>No books found.</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>data {specificBooks.length}</h1>
            <div>
                {specificBooks.map(book => (
                    <div key={book._id}>
                        <Card className="mt-6 w-90">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image src={book.cover_image} priority width={200} height={100} alt="card-image" />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {book.title}
                                </Typography>
                                <Typography>
                                    {book.description}
                                </Typography>
                            </CardBody>
                            <Typography>
                                <Button onClick={() => handleBookDelete(book._id, book.title)} className='text-red-600'>Delete</Button>
                                <Link href={`/updateMyBook/${book._id}`}>
                                    <Button className='text-red-600'>Update</Button>
                                </Link>
                            </Typography>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBooks;

















// import useSpecificUserBook from '@/Hooks/api/useSpecificUserBook';
// import Image from 'next/image';
// import { Card, CardHeader, CardBody, Typography, Button, } from "@material-tailwind/react";
// import Swal from 'sweetalert2';
// import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';
// import Link from 'next/link';



// const MyBooks = () => {
//     const [specificBooks, refetch,] = useSpecificUserBook();
//     console.log(specificBooks);

//     const axiosSecure = useAxiosSecure()


//     if (isLoading) {
//         return (
          
//              <div><span className="loading loading-ball loading-lg"></span></div>
//         )
//     }

//     if (!isLoading && specificBooks.length === 0) {
//         return (
//             <div>
//                 <h1>No books found.</h1>
//             </div>
//         );
//     }


//     const handleBookDelete = id => {
//         Swal.fire({
//             title: `Your Book has been deleted.`,
//             text: "Your Book Are delete",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 // Use Axios for delete operation
//                 axiosSecure.delete(`/api/v1/buy-books/${id}`)
//                     .then(response => {
//                         console.log(response.data);
//                         if (response.data.deletedCount > 0) {
//                             Swal.fire(
//                                 'Deleted!',
//                                 `Your ${specificBooks.name} has been deleted.`,
//                                 'success'
//                             );
//                             refetch()
//                         }
//                     })
//                     // Handle error here if needed
//                     .catch(error => {
//                         console.error('Error deleting Book:', error);

//                     });
//             }
//         });
//     };


//     return (
//         <div>
//             <h1> data {specificBooks?.length ?? 0} </h1>
//             <div>
//                 {specificBooks?.map(book => (
//                     <div key={book._id}>
//                         <Card className="mt-6 w-90">
//                             <CardHeader color="blue-gray" className="relative h-56">
//                                 <Image src={book?.cover_image}
//                                     priority width={200} height={100}
//                                     alt="card-image"
//                                 />
//                             </CardHeader>
//                             <CardBody>
//                                 <Typography variant="h5" color="blue-gray" className="mb-2">
//                                     {book?.title}
//                                 </Typography>
//                                 <Typography>
//                                     {book?.description}
//                                 </Typography>
//                             </CardBody>
//                             <Typography>
//                                 <Button onClick={() => handleBookDelete(book._id)} className='text-red-600 '> Delete  </Button>
//                                 <Link href={`/updateMyBook/${book._id}`} >
//                                     <Button className='text-red-600 '> update  </Button>
//                                 </Link>
//                             </Typography>


//                         </Card>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MyBooks;


