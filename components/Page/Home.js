import Head from "next/head";
import { Bounce } from "react-reveal";
import { useStoreActions } from "easy-peasy";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUsers } from "services/users";
import Loader from "components/Atom/Loader";
import Search from "components/Common/Search";
import CardUser from "components/Common/CardUser";

export default function Home() {
  const { setUser } = useStoreActions((action) => action);
  const [onSearch, setOnSearch] = useState("");
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const router = useRouter();

  const getUsersData = async () => {
    setLoading(true);
    const { data } = await getUsers();
    setLoading(false);
    setData(data.results);
  };

  const compareUsers = (newData) => {
    const oldData = users;
    const compare = newData.filter(
      (user) =>
        !oldData.find(
          (_user) =>
            `${user.id.name} ${user.id.value}` ===
            `${_user.id.name} ${_user.id.value}`
        )
    );

    if (compare?.length > 0) {
      const data = getUsersData();
      compareUsers(data);
      console.log(compare);
    } else {
      return
    }
  };

  const handleDetail = (user) => {
    let tempUser = [];
    tempUser.push(user);
    setUser(tempUser);
    const slug = user.name.first.toLowerCase();
    router.push(`/user/${slug}`);
  };

  useEffect(() => {
    getUsersData();
    const interval = setInterval(() => {
      getUsersData();
      compareUsers(data);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!onSearch) {
      setUsers(data);
    } else {
      const keySearch = onSearch.toLowerCase();
      const filterUsers = users?.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`;
        if (keySearch.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase();
          return firstLetter === keySearch;
        } else {
          return fullName.toLowerCase().includes(keySearch);
        }
      });
      setUsers(filterUsers);
    }
  }, [data, onSearch]);

  return (
    <div className="relative min-h-screen pb-20 px-[5%]">
      {loading && <Loader />}
      <Head title="Home" />

      <Search className="mb-6" onChange={(e) => setOnSearch(e.target.value)} />

      <div className="grid grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
        {users.map((e, idx) => (
          <Bounce bottom delay={(idx + 1) * 100} duration={1000} key={idx}>
            <CardUser
              name={`${e.name.title} ${e.name.first} ${e.name.last}`}
              email={e.email}
              image={e.picture.medium}
              onClickDetail={() => handleDetail(e)}
            />
          </Bounce>
        ))}
      </div>
    </div>
  );
}
