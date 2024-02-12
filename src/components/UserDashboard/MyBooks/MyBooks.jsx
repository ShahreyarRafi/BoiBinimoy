"use client"

import useSpecificUserBook from '@/Hooks/api/useSpecificUserBook';
import ComponentLoading from '@/components/Shared/loadingPageBook/ComponentLoading';
import Image from 'next/image';
import { Card, CardHeader, CardBody, Typography, Button,} from "@material-tailwind/react";
import Swal from 'sweetalert2';
import useAxiosSecure from '@/Hooks/Axios/useAxiosSecure';



const MyBooks = () => {
    const [specificBooks, isLoading, refetch,] = useSpecificUserBook();
    console.log(specificBooks);

    const axiosSecure =  useAxiosSecure()


    // if (isLoading) {
    //     return (
    //         <ComponentLoading></ComponentLoading>
    //         //  <div><span className="loading loading-ball loading-lg"></span></div>
    //     )
    // }

    // if (!isLoading && specificBooks.length === 0) {
    //     return (
    //         <div>
    //             <h1>No books found.</h1>
    //         </div>
    //     );
    // }




const handleBookDelete = id => {
    Swal.fire({
        title: `Your Book has been deleted.`,
        text: "Your Book Are delete",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            // Use Axios for delete operation
            axiosSecure.delete(`/api/v1/buy-books/${id}`)
                .then(response => {
                    console.log(response.data);
                    if (response.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            `Your ${specificBooks.name} has been deleted.`,
                            'success'
                        );
                        refetch()
                    }
                })
                  // Handle error here if needed
                .catch(error => {
                    console.error('Error deleting Book:', error);
                  
                });
        }
    });
};











    return (
        <div>
            <h1> data {specificBooks?.length ?? 0} </h1>
            <div>
                {specificBooks?.map(book => (
                    <div key={book._id}>
                        <Card className="mt-6 w-90">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <Image src={book?.cover_image}
                                    priority width={200} height={100}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {book?.title}
                                </Typography>
                                <Typography>
                                    {book?.description}
                                </Typography>
                            </CardBody>
                            <Typography>
                                <Button onClick={()=> handleBookDelete(book._id)} className='text-red-600 '> Delete  </Button>
                                <Button  className='text-red-600 '> update  </Button>
                            </Typography>


                        </Card>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBooks;


