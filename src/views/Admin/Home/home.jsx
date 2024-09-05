import { DeliveryDining, Fastfood, People } from '@mui/icons-material'
import React from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import { ActivitiesTimeline } from './TimeLine'

const home = () => {
  return (
    <div>
      <div className=' flex gap-5'>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
          {/* <Fastfood class="block mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0 " /> */}
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGelwS_r9NTwaRf2xg6A_Zu-v7BqFZdkcrnlwACCNgcNEnpzTmwZzaA9xC5RAEon5smSU&usqp=CAU" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Product Count
              </p>
              <p class="text-slate-500 font-medium">
                78
              </p>
            </div>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
          </div>
        </div>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
          {/* <DeliveryDining class="block mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0" /> */}
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                User Count
              </p>
              <p class="text-slate-500 font-medium">
                78
              </p>
            </div>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
          </div>
        </div>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
          {/* <Fastfood class="block mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0" /> */}
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgBaVs3fX54MOHLpM2XqsQJYuwAJJhp-jg&s" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Order Count
              </p>
              <p class="text-slate-500 font-medium">
                78
              </p>
            </div>
            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
          </div>
        </div>

      </div>

      <div className='m-5'>
        <LineChart />
      </div>

      <div className='m-5 grid grid-cols-2 gap-5'>
        <BarChart />
        <ActivitiesTimeline />
      </div>


    </div>
  )
}

export default home
