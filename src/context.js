import React, { useContext, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("");
  const [savelist, setSavelist] = useState(
    JSON.parse(localStorage.getItem("savelist")) || []
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

  const handleSave = (post) => {
    setSelected(post.id);
    let newobj = post;
    let mynewarr = [...savelist, newobj];
    // let uniqueSet = [...new Set(mynewarr)];

    const arrayUniqueByKey = [
      ...new Map(mynewarr.map((item) => [item["id"], item])).values(),
    ];
    setSavelist(arrayUniqueByKey);
    localStorage.setItem("savelist", JSON.stringify(arrayUniqueByKey));
  };
  return (
    <AppContext.Provider
      value={{
        posts,
        fetchPosts,
        handleSave,
        setSavelist,
        savelist,
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
