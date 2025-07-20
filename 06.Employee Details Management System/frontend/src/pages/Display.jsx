import { useState } from "react";

const Display = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/display/");
      const data = await res.json();
      setEmployees(data);
      setHasFetched(true);
    } catch (err) {
      console.error("Error fetching employees:", err);
      alert("Failed to load employee data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Display" className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Employees List</h2>
      <div className="text-center mb-4">
        <button
          onClick={fetchEmployees}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
        >
          Display Employee Details
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading employees...</p>
      ) : hasFetched && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-center border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Designation</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Salary</th>
                <th className="px-4 py-2">Join Date</th>
                <th className="px-4 py-2">Last Day</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-4 py-2 text-gray-500">
                    No employees found
                  </td>
                </tr>
              ) : (
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td className="px-4 py-2">{emp.name}</td>
                    <td className="px-4 py-2">{emp.email}</td>
                    <td className="px-4 py-2">{emp.designation}</td>
                    <td className="px-4 py-2">{emp.department}</td>
                    <td className="px-4 py-2">{emp.salary}</td>
                    <td className="px-4 py-2">{emp.date_of_joining}</td>
                    <td className="px-4 py-2">{emp.last_working_day}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Display;
