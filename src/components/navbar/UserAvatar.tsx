const UserAvatar = () => {
  return (
    <div className="relative h-[38px] w-[38px]">
      <img
        src="https://placehold.co/50"
        className="object-contain rounded-full"
      />
      <div className="absolute bottom-0 right-1">
        <div className="bg-green-500 rounded-full p-1.5" />
      </div>
    </div>
  );
};

export default UserAvatar;
