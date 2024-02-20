'use client'

import { useState } from "react";

import Link from 'next/link';
import { Button, Input } from "../../components";

export default function Page() {
    const [profile, setProfile] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
    })
    const [errorMessage, setError] = useState(null);

    const changeValue = (prop, value) => {
      const newProfile = {...profile};
      newProfile[prop] = value;
      setProfile(newProfile)
    }

    const submitForm = (e) => {
      e.preventDefault();
      if(profile.password1 !== profile.password2){
        setError("password's do not match")
        return;
      }
      if(!/(\D*\d){8}/.test(profile.password1)){
        setError("password must be at least 8 digits long")
        return;
      }
      if(!/[A-Z]/i.test(profile.password1)){
        setError("must contain at least one letter")
        return;
      }
      if(!/[0-9]/i.test(profile.password1)){
        setError("must contain at least one number")
        return;
      }
      // add to database
      // redirect for payment
      window.location.href = "/search";
    }

    return (
      <div>
        <h1>Sign up</h1>
        <form className='flex flex-col w-full md:w-[300px] m-auto' onSubmit={submitForm}>
          <Input
            required 
            value={profile.firstName}
            placeholder="First Name"
            onChange={(e) => changeValue("firstName", e.target.value)}
          />
          <Input
            required
            value={profile.lastName}
            placeholder="Last Name"
            onChange={(e) => changeValue("lastName", e.target.value)}
          />
          <Input
            required
            value={profile.email}
            placeholder="Email"
            onChange={(e) => changeValue("email", e.target.value)}
            type="email"
            name="email"
          />
          <Input
            required
            value={profile.password1} 
            placeholder="Type a password"
            onChange={(e) => changeValue("password1", e.target.value)}
            type="password"
          />
          <Input
            required
            value={profile.password2}
            placeholder="Type your password again"
            onChange={(e) => changeValue("password2", e.target.value)}
            type="password"
          />
          <Button type="submit">Submit</Button>
        </form>
        <p>Already have an account?</p>
        <p><Link href="/signin">Sign In here</Link></p>
        {
          errorMessage &&
          <p className="text-red-500">{errorMessage}</p>
        }
      </div>
    );
  }