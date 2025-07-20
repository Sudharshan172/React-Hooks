import { useState } from "react";

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    department: "",
    salary: "",
    date_of_joining: "",
    last_working_day: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://employee-details-management-system.onrender.com/api/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert("Employee added successfully!");
        setFormData({
          name: "",
          email: "",
          designation: "",
          department: "",
          salary: "",
          date_of_joining: "",
          last_working_day: ""
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <section id="Add" className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Employee</h2>
      <form className="grid gap-4 max-w-sm" onSubmit={handleSubmit}>
        {["name", "email", "designation", "department", "salary"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "email" ? "email" : field === "salary" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
        ))}
        <div>
          <label className="block mb-1 font-medium">Date of Joining</label>
          <input
            type="date"
            name="date_of_joining"
            value={formData.date_of_joining}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Last Working Day</label>
          <input
            type="date"
            name="last_working_day"
            value={formData.last_working_day}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded cursor-pointer">
          Add Employee
        </button>
      </form>
    </section>
  );
};

export default Add;
