const Home = () => (
  <div className="relative h-screen overflow-hidden">
    {/* Desktop image */}
    <img
      src="https://ik.imagekit.io/ipo22webapp/Copilot_20250716_153624.png?updatedAt=1752660448897"
      alt="Desktop Background"
      className="hidden md:block w-full h-full object-cover"
    />

    {/* Mobile image */}
    <img
      src="https://ik.imagekit.io/ipo22webapp/Copilot_20250716_160523.png?updatedAt=1752662147819"
      alt="Mobile Background"
      className="block md:hidden w-full h-full object-cover"
    />
  </div>
);
export default Home;