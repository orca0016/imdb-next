"use client"


export default function error({error , reset}) {

    return (
    <div className="text-center mt-10">
        <h1>Something went wrong. Please try agin later.</h1>
        <button className="hover:text-amber-600 bg-amber-200 rounded-lg p-2 mt-2" onClick={()=>reset()}>try again</button>
    </div>
  )
}
