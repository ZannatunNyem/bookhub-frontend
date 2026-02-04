import useAuth from "../Hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return <p className="text-center mt-10">Please login first</p>;
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <img
        src={user.photoURL}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border"
      />

      <h2 className="mt-4 text-xl font-bold">
        {user.displayName}
      </h2>

      <p className="text-gray-500">{user.email}</p>
    </div>
  );
}
