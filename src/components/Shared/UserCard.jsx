import Image from 'next/image';

const UserCard = ({ user }) => {

    console.log(user);

    return (
        <div className="flex flex-col rounded-lg border-2 border-black py-5">
            <Image src={user.photoURL} alt="profile" priority width={500} height={500} style={{
                width: '120px',
                height: '120px',
            }} className='rounded-full p-1 mx-auto' />
            <div className="flex flex-col pl-2">
                <h2 className="text-lg text-gray-600 font-semibold">{user?.name}</h2>
                <p className='text-xs text-gray-500'>{user?.email}</p>
            </div>
        </div>
    );
};

export default UserCard;