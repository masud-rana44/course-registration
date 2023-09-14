import { useEffect, useState } from "react";

import Cards from "./Cards";
import Header from "./Header";
import Cart from "./Cart";

function AppLayout() {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleSelectCourse = (course) => {
    setSelectedCourses((preCourses) => [...preCourses, course]);
    console.log(course);
  };

  return (
    <div className="bg-[#F3F3F3] min-h-screen w-full pb-20">
      <div className="container mx-auto">
        <Header />
        <main className="grid grid-cols-4 space-x-6">
          <Cards courses={courses} handleSelectCourse={handleSelectCourse} />
          <Cart selectedCourses={selectedCourses} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
