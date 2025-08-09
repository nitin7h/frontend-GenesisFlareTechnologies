"use client";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.businessType)
      newErrors.businessType = "Business type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // console.log("Form submitted:", formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });

      // console.log("Form data : ", formData);
      // send data to backend
      try {
        const response = await axios.post(
          "http://localhost:7000/leadData",
          formData
        );

        console.log("Backend Response : ", response.data);
        if (response.data.status) {
          setIsSubmitted(true);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // Axios error — safe to access error.response
          const message = error.response?.data?.message || "Backend Problem";
          alert(message);
        } else {
          // Not an Axios error
          alert("Unexpected error occurred");
        }
      }
    }
  };

  return (
    <div
      id="bookFreeDemo"
      className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm transition-colors duration-300"
    >
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-5xl text-green-500 mb-4">✓</div>
          <h3 className="text-2xl font-bold mb-2 dark:text-white">
            Thank You!
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We have received your information and will contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              data-lpignore="true"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              data-lpignore="true"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500"
              data-lpignore="true"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="businessType"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Business Type *
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 ${
                errors.businessType ? "border-red-500" : "border-gray-300"
              }`}
              data-lpignore="true"
            >
              <option value="">Select your business type</option>
              <option value="E-commerce">E-commerce</option>
              <option value="SaaS">SaaS</option>
              <option value="Agency">Marketing Agency</option>
              <option value="Retail">Retail</option>
              <option value="Other">Other</option>
            </select>
            {errors.businessType && (
              <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500"
              data-lpignore="true"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition dark:bg-indigo-700 dark:hover:bg-indigo-600"
            data-lpignore="true"
          >
            Book Free Demo
          </button>
        </form>
      )}
    </div>
  );
}
// Form Data Type
interface FormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

// Form Errors Type
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  businessType?: string;
}
