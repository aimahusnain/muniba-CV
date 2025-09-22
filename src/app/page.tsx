"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MunibaCV() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-4 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Export Button */}
        <div className="flex justify-end mb-4 print:hidden">
          <Button
            onClick={handlePrint}
            className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors duration-200 px-6 py-2"
          >
            Export as PDF
          </Button>
        </div>

        <Card className="overflow-visible shadow-lg border-0 bg-white">
          <CardContent className="p-0">
            {/* Header with professional styling */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2 tracking-tight">Muniba Hameed</h1>
                <p className="text-blue-100 text-lg mb-3 font-medium">Sales Associate (Aspiring) · Retail</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
                  <span>+92 317 4191779</span>
                  <span className="text-blue-300">|</span>
                  <span>manamhameed169@gmail.com</span>
                  <span className="text-blue-300">|</span>
                  <span>Mandi Bahauddin</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Career Objective */}
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">
                  Career Objective
                </h2>
                <div className="bg-blue-50 p-4 rounded border-l-2 border-blue-200">
                  <p className="text-gray-700 leading-relaxed">
                    Motivated and hardworking individual seeking a position as a{" "}
                    <strong className="text-blue-700">Sales Associate</strong> in the retail industry. Bringing strong
                    communication skills, customer handling abilities, and office management experience to contribute to
                    sales growth and excellent customer service.
                  </p>
                </div>
              </section>

              {/* Education */}
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 border-l-4 border-blue-500 shadow-sm rounded">
                    <p className="font-semibold text-gray-900">B.Com (Continue)</p>
                    <p className="text-gray-600 font-medium">AIOU</p>
                    <p className="text-sm text-blue-600 mt-1 font-medium">In Progress</p>
                  </div>

                  <div className="bg-white p-3 border-l-4 border-teal-500 shadow-sm rounded">
                    <p className="font-semibold text-gray-900">Intermediate (ICS)</p>
                    <p className="text-gray-600 font-medium">BISE Gujranwala</p>
                    <p className="text-sm text-teal-600 mt-1 font-medium">65% · 2020</p>
                  </div>

                  <div className="bg-white p-3 border-l-4 border-green-500 shadow-sm rounded">
                    <p className="font-semibold text-gray-900">Matriculation (Science)</p>
                    <p className="text-gray-600 font-medium">BISE Gujranwala</p>
                    <p className="text-sm text-green-600 mt-1 font-medium">67% · 2018</p>
                  </div>
                </div>
              </section>

              {/* Work Experience */}
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">
                  Work Experience
                </h2>
                <div className="bg-gray-50 p-4 rounded border-l-2 border-gray-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">Teacher & Office Management</h3>
                    <span className="text-sm text-blue-600 font-semibold">3+ years</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-3">
                    The Arqam Global Revolutionary High School · Mandi Bahauddin
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Developed strong communication and presentation skills.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Managed office tasks and daily operations.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Coordinated with students and parents, improving interpersonal skills.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      Built teamwork, organization, and problem-solving abilities.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Key Skills */}
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">Key Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Customer Service",
                    "Communication",
                    "Time Management",
                    "Office Management",
                    "Team Collaboration",
                    "MS Office & Email",
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className={`inline-block rounded px-3 py-1 text-sm font-medium ${
                        index % 2 === 0
                          ? "bg-blue-100 text-blue-800 border border-blue-200"
                          : "bg-teal-100 text-teal-800 border border-teal-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Personal Information */}
              <section className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: "Father's Name", value: "Hameed" },
                    { label: "Nationality", value: "Pakistani" },
                    { label: "Religion", value: "Islam" },
                    { label: "Date of Birth", value: "—" },
                    { label: "CNIC", value: "34402-1942235-2" },
                    { label: "Languages", value: "Urdu, Punjabi, English (basic)" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center p-2 border-b border-blue-100 bg-blue-50/30"
                    >
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* References */}
              <div className="text-center text-sm text-gray-500 border-t border-blue-200 pt-4">
                <p className="italic">References available upon request.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
