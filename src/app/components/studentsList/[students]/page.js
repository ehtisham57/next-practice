"use client"

import Link from "next/link"

const page = ({params}) => {

    console.log(params)
    return (
        <div>
            <h1>ssssssssssssssss</h1>
            <h1>your id is = {params.students}</h1>
            <Link href="/components/studentsList/">Back</Link>

        </div>
    )
}

export default page
