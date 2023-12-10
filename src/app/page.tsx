import React from 'react'

import AnalystData from '@/components/analyst-data'
import Banner from '@/components/banner'
import ClientStrustAlodata from '@/components/client-strust-alodata'
import SliderForAgency from '@/components/slider/for-agency'
import SliderForContentCreator from '@/components/slider/for-content-creator'
import SliderForSeller from '@/components/slider/for-seller'

export default function Home() {
    return (
        <main>
            <Banner />
            <ClientStrustAlodata />
            <SliderForSeller />
            <SliderForContentCreator />
            <SliderForAgency />
            <AnalystData />
        </main>
    )
}
