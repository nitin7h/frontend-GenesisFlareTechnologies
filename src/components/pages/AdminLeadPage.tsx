"use client";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import LeadTable from "./LeadTable";

interface LeadDataInterface {
  _id: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
  createdAt: string;
}

export default function AdminLeadPage() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [leadData, setLeadData] = useState<LeadDataInterface[]>([]);

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

    if (!formData.username.trim()) newErrors.username = "Name is required";
    if (!formData.password.trim()) {
      newErrors.password = "Email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // console.log("Form submitted:", formData);

      setFormData({
        username: "",
        password: "",
      });

      // console.log("Form data : ", formData);
      // send data to backend
      try {
        const response = await axios.post(
          "http://localhost:7000/admin/leads",
          formData
        );

        // console.log("Backend Response : ", response.data);
        if (response.data) {
          setLeadData(response.data);
          setIsSubmitted(true);
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // Axios error — safe to access error.response
          const message =
            error.response?.data?.message || "An unknown error occurred";
          alert(message);
        } else {
          // Not an Axios error
          alert("Unexpected error occurred");
        }
      }
    }
  };

  return (
    <>
      {isSubmitted ? (
        <LeadTable data={leadData} />
      ) : (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
              For sea all Leads
            </h2>
            {/* <p className="text-gray-600 text-center mb-12 dark:text-gray-300">
              Schedule your free demo to see how Growly can transform your
              advertising
            </p> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 dark:text-gray-300"
                >
                  Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                  data-lpignore="true"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 mb-2 dark:text-gray-300"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-600 dark:text-white dark:border-gray-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  data-lpignore="true"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition dark:bg-indigo-700 dark:hover:bg-indigo-600"
                data-lpignore="true"
              >
                Sea Leads
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
// Form Data Type
interface FormData {
  username: string;
  password: string;
}

// Form Errors Type
interface FormErrors {
  username?: string;
  password?: string;
}
