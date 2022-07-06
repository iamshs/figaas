import { useState } from 'react'
import { Tab } from '@headlessui/react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    AllMenu: [
      {
        id: 1,
        title: 'Cappuccion',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
      {
        id: 1,
        title: 'Americano',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
      {
        id: 2,
        title: 'Ristretto',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
      {
        id: 3,
        title: 'Mocha',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
      {
        id: 4,
        title: 'Piccolo Latte',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
      {
        id: 4,
        title: 'Macchiato',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
    ],
    Breakfast: [
      {
        id: 1,
        title: 'Cappuccion',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
      {
        id: 2,
        title: 'Mocha',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
    ],
    Lunch: [
      {
        id: 1,
        title: 'Piccolo Latte',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
    ],
    Dinner: [
      {
        id: 1,
        title: 'Americano',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
     
    ],
    BudgetMeal: [
      {
        id: 1,
        title: 'Macchiato',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
     
    ],
    Buffet: [
      {
        id: 1,
        title: 'Ristretto',
        price: 49,
        details: 'Usage of the Internet is becoming more common due to rapid advance',
      },
     
    ],
  })

  return (
    <div className="w-full   max-w-5xl  mx-auto px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex lg:mx-5 space-x-1 rounded-xl bg-base-100  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full h-24 rounded-lg py-2.5 text-sm font-medium leading-5    ',
                  'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2 text-black',
                  selected
                    ? 'bg-primary text-secondary shadow'
                    : ' hover:bg-black hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl  p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:ml-6 mt-10'>
                {posts.map((post) => (
                <div class="card max-w-md bg-base-100 shadow-sm">
                <div className='flex p-6'>
                <div class="">
                  <h2 class="card-title my-3">{post.title}</h2>
                  <p className='text-gray-500'>{post.details}</p>
                </div>
                <div>
                  <h3 className='card-title  text-primary'> <span>$</span>{post.price}</h3>
                </div>
                </div>
              </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
