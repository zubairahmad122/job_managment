import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoCloseCircleSharp } from 'react-icons/io5';

const index = ({url}) => {
  const [showMore, setShowMore] = useState({});

  const {id} = useParams();

  const [cvId, setCvId] = useState(false);
  const [applications, setApplications] = useState(null);
  const [filteredApplications, setFilteredApplications] = useState(null); // State for filtered applications
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const getApplications = async () => {
    try {
      const response = await axios.post(`${url}/application/applicationbypost`,{
        id:id
      });
      setApplications(response.data.data);
      setFilteredApplications(response.data.data); // Initialize filtered
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  useEffect(() => {
    // Filter applications whenever searchQuery or applications change
    if (!searchQuery) {
      setFilteredApplications(applications); // If no search query, show all applications
    } else {
      const filtered = applications.filter((item) =>
        item.position.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredApplications(filtered);
    }
  }, [searchQuery, applications]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const acceptApplications = async (id, status) => {
    if (status === "Accepted") {
      return toast.error("Application already Accepted ");
    }
    try {
      const response = await axios.put(`${url}/application/accept/${id}`);
      if (response.data.success) {
        toast.success("Application Accept Successfuly");
        await getApplications();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const rejectApplications = async (id, status) => {
    if (status === "reject") {
      return toast.error("Application already reject ");
    }
    try {
      const response = await axios.put(`${url}/application/reject/${id}`);
      if (response.data.success) {
        toast.success("Application Reject Successfuly");
        await getApplications();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteApplications = async (id) => {
    try {
      const response = await axios.post(`${url}/application/remove`, {
        id: id,
      });
      if (response.data.success) {
        toast.success("Application Reject Successfuly");
        await getApplications();
      }
    } catch (error) {
      console.log(error);
    }
  };



  

  return (
    <>

<section className="w-full p-5  overflow-y-scroll no-scrollbar">
      {filteredApplications !== null && filteredApplications.length > 0 && (
        <>
          {cvId &&
          <div className="fixed  top-0 left-0 bg-[#0006] w-full h-screen">
            <div className=" no-scrollbar w-full md:w-[700px] pt-5 mb-5 mx-auto h-full bg-white">
              {applications?.map(
                (item) =>
                  item._id === cvId && (
                    <>
                      <IoCloseCircleSharp
                        onClick={() => setCvId(false)}
                        size={60}
                        className=" border-2 border-blue-700 rounded-full  cursor-pointer absolute top-5 right-5 text-yellow-400"
                      />
                      <iframe
                        src={`${url}/images/${item.cv}`}
                        className="w-full h-full no-scrollbar"
                        frameborder="0"
                      ></iframe>

                      <h1 className="text-3xl font-bold mb-5">Rejected Applications</h1>

                      {/* Search Input */}
                      <input
                        type="text"
                        placeholder="Search by position title"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className=" border-2 p-2 mb-5 rounded-md"
                      />
                    </>
                  )
              )}
            </div>
          </div>
}
        </>
      )}
      {filteredApplications !== null && filteredApplications.length > 0 ? (
        <div className="flex flex-wrap gap-10">
          {filteredApplications?.map((item) => (
            <div className=" border min-w-[350px] shadow-xl rounded-sm">
              <div className="flex p-6  items-center justify-center">
                <img
                  src={`${url}/images/${item.image}`}
                  className="w-40 h-40 rounded-full object-cover object-center   "
                />
              </div>
              <div className="mt-3   px-6 pb-2 border-b border-b-[#bdb4b4] text-center">
                <h2 className="text-2xl text-blue-500 font-semibold">
                  {item.position}
                </h2>
                <button
                  onClick={() => setCvId(item._id)}
                  className=" px-6 py-2 my-2 bg-yellow-300 hover:bg-yellow-500 duration-200 rounded-md"
                >
                  View Cv
                </button>
              </div>
              <div className="p-6">
                <h5 className="text-[#514e4e]">
                  <b className="text-black">Name: </b>
                  {item.name}
                </h5>
                <p className="text-[#514e4e] my-2">
                  <b className="text-black">Phone Number: </b>
                  {item.phone_number}
                </p>
                <p className="text-[#514e4e] my-2">
                  <b className="text-black">Email: </b>
                  {item.email}
                </p>

                <p className="text-[#514e4e] my-2">
                  <b className="text-black">Current Salary : </b>{" "}
                  {item.current_salary} PKR
                </p>
                <p className="text-[#514e4e] my-2">
                  <b className="text-black">Expected Salary : </b>{" "}
                  {item.expected_salary} PKR
                </p>

                <p className="p-2 text-yellow-800 text-sm w-20 bg-cyan-200 rounded-lg">
                  {item.status}
                </p>

                <div className="flex my-5 items-center justify-between">
                  <button
                    disabled={item.status === "Accepted"}
                    onClick={() => acceptApplications(item._id, item.status)}
                    className={`py-[10px] px-6 bg-blue-600 hover:bg-blue-700 duration-300 rounded-md text-white ${
                      item.status === "Accepted" && "opacity-40"
                    }`}
                  >
                    Accept
                  </button>

                  <button
                    disabled={item.status === "Rejected"}
                    onClick={() => rejectApplications(item._id, item.status)}
                    className="py-[10px] px-6 bg-red-600 hover:bg-red-700 duration-300 rounded-md text-white"
                  >
                    Reject
                  </button>
                </div>
                <button
                  onClick={() => deleteApplications(item._id)}
                  className="py-[10px] w-full text-center px-6 bg-red-500 hover:bg-red-600 duration-300 rounded-md text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center text-4xl min-h-[70vh] flex items-center justify-center">
        There are no applications.
        </h1>
      )}
    </section>
    </>
  );
};

export default index;
