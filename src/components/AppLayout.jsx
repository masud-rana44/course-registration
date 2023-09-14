import { useEffect, useState } from "react";
import Cards from "./Cards";

function AppLayout() {
  const [ courses, setCourses ] = useState([]);

  useEffect(() => {
    const fetchCourses = async() => {
      const res = await fetch('/data.json')
    const data = await res.json();
    setCourses(data);
    }

    fetchCourses();
  }, [])

  return (
    <div className="bg-[#F3F3F3] min-h-screen w-full">
      <h2 className="text-[#1C1B1B] text-3xl font-bold">Course Registration</h2>
      <main>
        <Cards courses={courses}/>
        <div>Summary</div>
      </main>
    </div>
  );
}

export default AppLayout;
