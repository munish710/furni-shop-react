import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

const initialAddress = {
  house: "",
  street: "",
  city: "",
  state: "",
  pin: "",
  saved: false,
};

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(null);
  const [address, setAddress] = useState(initialAddress);
  const [orders, setOrders] = useState([]);
  const [perOrderTotal, setPerOrderTotal] = useState([]);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  useEffect(() => {
    const localOrders = JSON.parse(localStorage.getItem("orders"));
    const localperOrderTotal = JSON.parse(
      localStorage.getItem("perordertotal")
    );
    if (localOrders && localperOrderTotal) {
      setOrders(localOrders);
      setPerOrderTotal(localperOrderTotal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("perordertotal", JSON.stringify(perOrderTotal));
  }, [orders, perOrderTotal]);

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
        address,
        setAddress,
        orders,
        setOrders,
        perOrderTotal,
        setPerOrderTotal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
