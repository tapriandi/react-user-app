/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useStoreState } from "easy-peasy";
import { BiChevronLeft } from "react-icons/bi";
import Layout from "components/Common/Layout";

export default function UserDetail() {
  const { user } = useStoreState((state) => state);

  return (
    <Layout>
      <Link href="/">
        <a className="relative flex items-center text-sm left-[16%] link md:left-[10%] sm:left-[5%]">
          <BiChevronLeft className="text-xl" />
          Home
        </a>
      </Link>
      {user.map((e, idx) => (
        <div
          key={idx}
          className="flex pt-10 px-[10%] justify-center md:px-[5%] sm:flex-col"
        >
          <img
            src={e.picture.large}
            alt=""
            className="w-1/3 sm:w-2/3 sm:mx-auto"
          />
          <div className="pl-8 w-1/2 sm:pl-0 sm:pt-8 sm:w-full">
            <table className="table-auto w-full md:text-sm md:leading-7">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>: {`${e.name.first} ${e.name.last}`}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>: {e.gender}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: {e.email}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>: {e.phone}</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>: {e.cell}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </Layout>
  );
}
