"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

export default function SignUpPage() {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [loading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }

  const validateForm = () => {
    let formIsValid = true
    let newErrors = { name: "", email: "", password: "" }

    // Basic validation for name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      formIsValid = false
    }

    // Basic validation for email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address"
      formIsValid = false
    }

    // Basic validation for password
    if (formData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long"
      formIsValid = false
    }

    setErrors(newErrors)
    return formIsValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Example API call (replace with your actual API endpoint)
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to another page or show success message
        console.log("User signed up successfully", data)
      } else {
        // Handle errors
        console.error("Error signing up:", data.message)
      }
    } catch (error) {
      console.error("Network error:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
      <div className="w-full max-w-lg space-y-8 p-10 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold text-gray-800">Create Your Account</h1>
          <p className="text-gray-600">Sign up and start using our service today</p>
        </div>

        {/* Social Buttons */}
        <div className="space-y-4">
          {/* GitHub and Google buttons here */}
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-500">or</span>
          </div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="mt-2 p-3 border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-2 p-3 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Create a strong password"
              className="mt-2 p-3 border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>
           <Link href="/" className="text-indigo-600 hover:text-indigo-500">
            <Button
              className={`w-full bg-indigo-600 hover:bg-indigo-700 ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Continue"}
            </Button>
          </Link>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">Secured by Clerk</div>
      </div>
    </div>
  )
}
