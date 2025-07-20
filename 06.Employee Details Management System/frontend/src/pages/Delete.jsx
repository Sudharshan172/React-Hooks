import { useState } from "react";

const Delete = () => {
  const [email, setEmail] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter a valid email");
      return;
    }

    try {
      const res = await fetch("https://employee-details-management-system.onrender.com/api/delete/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Employee deleted successfully!");
        setEmail("");
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during deletion.");
    }
  };

  return (
    <section id="Delete" className="p-6 min-h-screen max-w-screen-xl">
      <h2 className="text-2xl font-bold mb-4">Delete Employee</h2>
      <form className="grid gap-4 max-w-sm" onSubmit={handleDelete}>
        <div>
          <label className="block mb-1 font-medium">Employee Email</label>
          <input
            type="email"
            placeholder="Enter Employee Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-red-600 text-white p-2 rounded cursor-pointer hover:bg-red-700">
          Delete Employee
        </button>
      </form>
    </section>
  );
};

export default Delete;
