"use server"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  // Validate form data
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error("All fields are required")
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    throw new Error("Invalid email address")
  }

  // In a real application, you would send this data to a database or email service
  // For example, using a service like SendGrid, Mailgun, or storing in a database

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demonstration purposes, we'll just log the data
  console.log("Form submission:", formData)

  // In a real application, you might return a success message or ID
  return { success: true, id: Date.now().toString() }
}

