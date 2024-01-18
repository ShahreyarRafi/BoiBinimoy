import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (

        <main className="flex min-h-screen flex-col items-center justify-between p-24  ">
            <div className=''>
                <Image
                    className="text-center items-center justify-center rounded-md  "
                    src="/404-page.jpg"
                    alt="Next.js Logo"
                    width={600}
                    height={250}
                    priority
                />

                <div className=''>
                    <button><Link href="/"> Go To Home </Link>  </button>
                </div>
            </div>
        </main>

    );
};

export default notFoundPage;