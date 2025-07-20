import Header from './Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col justify-between md:flex-row items-center p-6">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="dresses to be noticed"
            className="block md:hidden w-full"
          />
          <p className="text-gray-600">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis nesciunt, assumenda illo ut sed atque necessitatibus similique, minus dolorum laudantium, commodi nihil. Asperiores natus praesentium minus ipsa cum soluta?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sint ad cum tempora reprehenderit excepturi, vero, molestiae cupiditate nobis iure nulla asperiores molestias aliquam labore ipsa eos voluptate non qui.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="hidden md:block md:w-7/15 mt-10"
        />
      </div>
    </>
  )
}
