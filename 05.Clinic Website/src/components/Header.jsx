import React, {useState} from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        {href:'#home', label:'Home'},
        {href:'#services', label:'Services'},
        {href:'#about', label:'About Us'},
        {href:'#specialists', label:'Specialists'},
        {href:'#contact', label:'Contact'},
    ]
    return (
        <header className="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-pink-600 rounded">
                    <h1 className="text-2xl font-bold text-pink-600">Skin Care Clinic</h1>
                </a>
                <nav className="hidden md:flex space-x-6" aria-label="Primary navigation">
                    
                        {navLinks.map((link, index)=>(
                            
                                <a key={index} href={link.href} className="text-gray-700 hover:text-pink-600 transition-colors duration-200 focus:outline-none focus:ring-pink-600 focus:rounded">
                                    {link.label}
                                </a>
                            
                        ))}
                    
                </nav>
                <button className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
                aria-controls='mobile-menu'
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                            ):(
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>
                {isMenuOpen && (
                    <aside id="mobile-menu" className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4" aria-label="Mobile-menu">
                        <nav aria-label="Mobile navigation">
                            <ul className="flex flex-col space-y-4">
                                {navLinks.map((link, index)=>(
                                    <li key={index}>
                                        <a href={link.href} className="block text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:rounded"
                                        onClick={toggleMenu}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                )}
                <nav className="hidden md:block" aria-label="Appointment booking">
                    <a href="#appointment" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2">
                        Book Appointment
                    </a>
                </nav>
            </div>
        </header>
    );
};
export default Header;
