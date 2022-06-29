import React from "react";
import FormInput from "./components/FormInput";
import './App.css';

const dummyData = [
  {
    playerName: "asep",
    email: "asep@gmail.com",
    address: "jakarta"
  },
  {
    playerName: "yusuf",
    email: "yusuf@gmail.com",
    address: "bandung"
  },
  {
    playerName: "afif",
    email: "afif@gmail.com",
    address: "karawang"
  },
  {
    playerName: "iman",
    email: "iman@gmail.com",
    address: "bandung"
  }
]
  


function App() {
  const [isEdit, setIsEdit] = React.useState(false);
  const [searchedPerson, setSearchedPerson] = React.useState([{
    playerName: "<Nama>",
    email: "<Email>",
    address: "<Address>"
  }])

  const editData = () => {
    setIsEdit(!isEdit)
  }

  const doSearch = (value) => {
    let lowerCaseText = value.toLowerCase()
    const data = dummyData;
    setSearchedPerson(data.filter((x) => {
      return ((x.playerName).toLowerCase() === lowerCaseText) || 
      ((x.email).toLowerCase() === lowerCaseText) || 
      ((x.address).toLowerCase() === lowerCaseText)
    }))
  }

  return (
    <div className="App">
      {/* FormInput menerima Props isEdit */}
      <input placeholder={"Search"} style={{ width: 800, borderRadius: 10, marginTop: 20 }} onChange={(v) => doSearch(v.target.value)}/>
      { 
        searchedPerson.map(data => {
          return (
            <div style={{ display: "flex", flexDirection: "row", width: 800, justifyContent: "space-between",
        margin: 20 }}>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>Name {data.playerName}</div>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>Email {data.email}</div>
              <div style={{ fontSize: 20, fontWeight: "bold" }}>Address {data.address}</div>
            </div>
          )
        })
      }
      <div style={{ display: "flex", flexDirection: "row"}}>
        <FormInput isEdit={isEdit}/>
        <FormInput isEdit={!isEdit}/>
      </div>
      <button style={{ width: 50, height: 20, borderRadius: 8, backgroundColor: (isEdit) ? "green" : "red" }} onClick={() => editData()}>
        {!isEdit ? "Edit" : "Create"}
      </button>
    </div>
  );

}

export default App;
