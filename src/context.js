import React, { useContext, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("");
  const [favouritelist, setFavouritelist] = useState(
    JSON.parse(localStorage.getItem("favouritelist")) || []
  );

  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
    return response.data;
  };

  const handleFavourite = (post) => {
    setSelected(post.id);
    let newobj = post;
    let mynewarr = [...favouritelist, newobj];
    const arrayUniqueByKey = [
      ...new Map(mynewarr.map((item) => [item["id"], item])).values(),
    ];
    if (user) {
      setFavouritelist(arrayUniqueByKey);
      localStorage.setItem("favouritelist", JSON.stringify(arrayUniqueByKey));
    }
  };
  return (
    <AppContext.Provider
      value={{
        posts,
        fetchPosts,
        handleFavourite,
        setFavouritelist,
        favouritelist,
        selected,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
