import Image from 'next/image'

const ActiveUser = ({ user, setCurrentFriend }) => {
  return (
    <div
      onClick={() =>
        setCurrentFriend({
          _id: user.userInfo.id,
          email: user.userInfo.email,
          image: user.userInfo.image,
          userName: user.userInfo.userName,
        })
      }
      className="active-friend"
    >
      <div className="image-active-icon">
        <div className="image">
          <Image src={`./image/${user.userInfo.image}`} alt="user" width={200} height={200} />
          <div className="active-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
