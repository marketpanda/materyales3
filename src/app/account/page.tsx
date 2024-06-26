import React from 'react'
import { redirect } from 'next/navigation'
import readUserSession from '../lib/actions'

export default async function page() {
    const { data  } = await readUserSession()

    if (!data.session) {
        return redirect("/login")
    }    
}