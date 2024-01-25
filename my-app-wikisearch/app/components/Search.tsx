'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }
    return (
        <form onSubmit={handleSubmit} className='w-50 flex justify-center md:justify-between'>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='rounded-xl p-2 bg-white w-80 text-xl text-gray-500' />

            <button className='p-2 text-2xl rounded-lg font-bold' type='submit'>🔍</button>
        </form>
    )
}
