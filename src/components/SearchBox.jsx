"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBox() {
    const [search , setSearch ] = useState('')
    const router = useRouter()
    const handleSubmit = (e)=>{
        e.preventDefault()
        router.push(`/search/${search}`)
    }
  return (
    <form className="flex justify-between p-x-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
        <input type="text" placeholder="search keywords..." className="w-full h-14 rounded-md placeholder-gray-500 outline-none  bg-transparent flex-1" value={search} onChange={(e)=>setSearch(e.target.value)} />
    <button className="bg-amber-600 px-4 rounded-md m-3 disabled:bg-transparent disabled:cursor-not-allowed disabled:text-gray-400" type='submit' disabled={search ===''}>Search</button>
    </form>
  )
}
