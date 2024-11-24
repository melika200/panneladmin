import { useState } from "react";
import { data } from "../Data";
import "./Search.css"

export default function Search() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((fil) => {
    return search.toLowerCase() === "" ? fil : fil.first_name.toLowerCase().includes(search);
  });
 
  return (
    <>
      <div className="search">
        <div className="container">
          <h1 className="title" style={{ textAlign: "center", color: "#fff" }}>Contact Keeper</h1>
          <form>
            <input onChange={(e) => setSearch(e.target.value)} placeholder="search" />
          </form>
          <table style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
            <thead>
              <tr>
                <td>Firstname</td>
                <td>Lastname</td>
                <td>Phone</td>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>Not Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
