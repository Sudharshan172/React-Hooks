import { useState } from "react";

const Update = () => {
  const [formData, setFormData] = useState({
    email: "",  // Now using email instead of numeric ID
    designation: "",
    department: "",
    salary: "",
    last_working_day: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      alert("Please enter a valid employee email");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/update/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert("Employee updated successfully!");
        setFormData({
          email: "",
          designation: "",
          department: "",
          salary: "",
          last_working_day: ""
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <section id="Update" className="p-6 container mx-auto min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Update Employee</h2>
      <form className="grid gap-4 max-w-sm" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-medium">Employee Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Employee Email"
            className="border p-2 w-full"
            required
          />
        </div>

        {["designation", "department", "salary"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "salary" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-medium">Updated Last Working Day</label>
          <input
            type="date"
            name="last_working_day"
            value={formData.last_working_day}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <button type="submit" className="bg-green-700 text-white p-2 rounded cursor-pointer">
          Update Employee
        </button>
      </form>
    </section>
  );
};

export default Update;
