import { FaQuoteLeft, FaRegStar, FaStar} from "react-icons/fa";
const Specialists = () => {
    const specialists = [
        {
            id:1,
            name: 'Dr. Anne Johnson',
            role: 'Plastic Surgery',
            image: 'https://ik.imagekit.io/ipo22webapp/SpecialistsImg.png?updatedAt=1751562755563',
            bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maxime molestias repellat dolore totam alias libero illo consequuntur quidem consequatur? Sit modi quasi debitis! Quam odio molestiae aliquam rerum incidunt!',
            rating: 5,
            specialties: ['Facelifts', 'Rhinoplasty', 'Blepharoplasty']
        },
        {
            id:2,
            name: 'Dr. Micheal Chen',
            role: 'Dermatologist',
            image: 'https://ik.imagekit.io/ipo22webapp/SpecialistsImg1.png?updatedAt=1751562755641',
            bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maxime molestias repellat dolore totam alias libero illo consequuntur quidem consequatur? Sit modi quasi debitis! Quam odio molestiae aliquam rerum incidunt!',
            rating: 4,
            specialties: ['Laser Treatments', 'Botox', 'Fillers']
        },
        {
            id:3,
            name: 'Dr. Elena Rodriguez',
            role: 'Aesthetic Physician',
            image: 'https://ik.imagekit.io/ipo22webapp/SpecialistsImg2.png?updatedAt=1751562755704',
            bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maxime molestias repellat dolore totam alias libero illo consequuntur quidem consequatur? Sit modi quasi debitis! Quam odio molestiae aliquam rerum incidunt!',
            rating: 5,
            specialties: ['CoolSculpting', 'Ultherapy', 'Thread Lifts']
        }, 
    ];
    const renderStars = (rating) => {
        return [...Array(5)].map((_,i)=>(
            i<rating?
            <FaStar key={i} className = 'text-yellow-400 inline' aria-hidden='true'/>:
            <FaRegStar key={i} className = 'text-yellow-400 inline' aria-hidden='true'/>
        ));
    }
    return (
        <section id="specialists" className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 bg-purple-100">
            <div className="max-w-screen-xl px-4">
                <header data-aos='fade-up' data-aos-delay='400' className="text-center mb-16 relative">
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-pink-100 opacity-30 z-0" aria-hidden='true'></span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
                        Meet Our <span className="text-pink-600">Expert Team</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse quisquam atque saepe reprehenderit quam delectus beatae unde excepturi quasi, consequuntur sapiente repudiandae neque nobis praesentium veniam vel laboriosam ab!
                    </p>
                    <span className="absolute -bottom-6 right-1/4 w-16 h-16 rounded-full bg-purple-100 opacity-20 z-0" aria-hidden='true'></span>
                </header>
                <ul data-aos='fade-up' data-aos-delay='500' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {
                        specialists.map((doctor)=>(
                            <li key={doctor.id} className="group relative">
                                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                                    <figure className="relative h-80 overflow-hidden">
                                        <img src={doctor.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"/>
                                        <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden='true'></span>
                                        <aside className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm" aria-label={`Rating: ${doctor.rating} stars`}>
                                            {renderStars(doctor.rating)}
                                            <span className="ml-1 text-sm font-medium">
                                                {doctor.rating}
                                            </span>
                                        </aside>
                                    </figure>
                    <div className="p-6 relative -mt-10">
                        <div className="bg-pink-50 rounded-lg shadow-md p-6">
                            <header>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                                <p className="text-pink-600 font-medium mb-3">{doctor.role}</p>
                            </header>
                            <p className="text-gray-600 mb-4">{doctor.bio}</p>
                            <ul className="flex flex-wrap gap-2 mb-4">
                                {doctor.specialties.map((spec, i)=>(
                                    <li key={i}>
                                        <span className="bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
                                            {spec}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <figure className="absolute -top-6 left-6 bg-pink-600 text-white p-3 rounded-full shadow-lg"
                            aria-hidden='true'>
                                <FaQuoteLeft className='text-lg'/>
                            </figure>
                        </div>
                    </div>
                                </article>
                            </li>
                        ))
                    }
                </ul>
                <aside data-aos='fade-up' data-aos-delay='500' className="bg-gradient -to-r from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <span className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-200 opacity-20"
                    aria-hidden='true'></span>
                    <span className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-pink-200 opacity-20"
                    aria-hidden='true'></span>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                            Ready to Consult With Our Specialists ?
                        </h3>
                        <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, amet rerum. Debitis reprehenderit qui autem, culpa, eum fuga ut quidem sunt aliquam distinctio eos sapiente impedit similique, laborum perferendis atque.
                        </p>
                        <nav className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus-ring-2 focus:ring-pink-800 focus:ring-offset-2" aria-label="Book a consultation">
                                Book Consultation
                            </a>
                            <a href="#" className="border border-pink-600 hover:bg-pink-50 text-pink-600 px-8 py-3 rounded-full transition focus:outline-none focus-ring-2 focus:ring-pink-500 focus:ring-offset-2" aria-label="Contact us">
                                Contact Us
                            </a>
                        </nav>
                    </div>
                </aside>
            </div>

        </section>
    );
};
export default Specialists;
