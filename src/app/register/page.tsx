"use client"
import { Box, Heading } from '@radix-ui/themes'
import React, { useEffect } from 'react'
import * as Form from '@radix-ui/react-form' 
import * as z from 'zod' 
import { signUp } from '@/lib/auth-action'
import { checkSession } from '../utils/checkSession'
import Link from 'next/link'
 
const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password is required"
    }),
    confirm: z.string().min(6, {
      message: "Password is required"
    })
  })
  .refine((data) => data.confirm === data.password, {
    message: "Passwords did not match",
    path: ["confirm"]
  })

type FormData = z.infer<typeof FormSchema>

export default function RegisterPage() {

    useEffect(() => {
        checkSession()
      }, []) 

    return (
        <>
            <main className="flex min-h-screen justify-center items-center bg-gray-100 ">
                <div className="w-full sm:w-[360px] flex">  
                    <Box className="rounded-md w-full shadow bg-white mt-2 flex sm:flex-row flex-col">
                        <div className='mx-4'>
                            <Heading size="5" className="mt-8">Sign up</Heading> 
                            <Form.Root className="w-full" action="">
                                <Form.Field className="grid mb-[10px]" name="email">
                                    <div className="flex items-baseline justify-between">
                                        <Form.Label className="text-[15px] font-medium leading-[35px]">Username/Email</Form.Label>
                                        <Form.Message className="text-[13px] opacity-[0.8]" match="valueMissing">
                                            Please enter your email or username
                                        </Form.Message> 
                                    </div>
                                    <Form.Control asChild>
                                        <input
                                            className="box-border text-right w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[2px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                            // value={length !== null ? length : ''}
                                            // onChange={ }
                                            autoComplete='off'
                                            required
                                        />
                                    </Form.Control>
                                </Form.Field>

                                <Form.Field className="grid mb-[10px]" name="password">
                                    <div className="flex items-baseline justify-between">
                                        <Form.Label className="text-[15px] font-medium leading-[35px]">
                                        Password 
                                        </Form.Label>
                                        <Form.Message className="text-[13px] opacity-[0.8]" match="valueMissing">
                                        Please enter your password
                                        </Form.Message>
                                    </div>
                                    <Form.Control asChild>
                                        <input
                                            className="box-border w-full text-right bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[2px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                            // value={width !== null ? width : ''}
                                            // onChange={ } 
                                            autoComplete='off'
                                            type="password"
                                            
                                            />
                                    </Form.Control>
                                </Form.Field>
                        
                                <Form.Field className="grid mb-[10px]" name="confirm">
                                    <div className="flex items-baseline justify-between">
                                        <Form.Label className="text-[15px] font-medium leading-[35px]">
                                            Confirm Password 
                                        </Form.Label>
                                        <Form.Message className="text-[13px] opacity-[0.8]" match="valueMissing">
                                            Please confirm your password
                                        </Form.Message>
                                    </div>
                                    <Form.Control asChild>
                                        <input
                                            className="box-border w-full text-right bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                                            // value={width !== null ? width : ''}
                                            // onChange={ } 
                                            autoComplete='off'
                                            type="password"
                                            />
                                    </Form.Control>
                                </Form.Field>
                            
                                <Form.Submit asChild>
                                    <button
                                        type='submit'
                                        formAction={signUp}
                                        className="mt-12 mb-8 box-border w-full text-violet shadow-blackA4 hover:bg-purple-500 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-purple-800 text-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                                        Signup
                                    </button>
                                </Form.Submit>
                                <div className="flex justify-end text-sm mb-4">
                                Already have an account? 
                                    <Link href="/login">
                                        <span className="hover:underline">&nbsp;Login here</span></Link>
                                </div>
                            </Form.Root> 
                        </div> 
                    </Box>
                </div>
            </main>
        </>
    )
}
