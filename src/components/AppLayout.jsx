import { useEffect, useState } from "react";
import Cards from "./Cards";
import Header from "./Header";

function AppLayout() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="bg-[#F3F3F3] min-h-screen w-full ">
      <div className="container mx-auto">
        <Header />
        <main className="grid grid-cols-4 space-x-6">
          <Cards courses={courses} />
          <div>Summary</div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
