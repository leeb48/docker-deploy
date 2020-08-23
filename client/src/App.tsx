import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    async function fetchApi(): Promise<void> {
      const customApi = axios.create({
        baseURL: "/api",
      });

      const res = await customApi.get("/");

      console.log(res.data);
    }

    fetchApi();
  }, []);

  const [name, setName] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const customApi = axios.create({
      baseURL: "/api",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(name);

    await customApi.post("/", { name }, config);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={name} />
        <button>Submit Button</button>
      </form>
    </div>
  );
}

export default App;
