import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import SingleCart from "../Components/Cart/SingleCart";


const MyCart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://bookhub-backend-six.vercel.app/cart?email=${user.email}`)
        .then(res => setCart(res.data));
    }
  }, [user]);

  return (
    
          <div>
<table className="table">
  <thead>
    <tr>
      <th className="hidden sm:table-cell">
        <p>No</p>
      </th>
      <th>Name</th>
      <th>Category</th>
      <th>Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {cart.map(item => (
      <SingleCart key={item._id} item={item} />
    ))}
  </tbody>
</table>

    </div>


   
  );
};

export default MyCart;
