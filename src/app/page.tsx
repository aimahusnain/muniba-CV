import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MunibaCV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Export Button */}
        <div className="flex justify-end mb-4">
          <Button onClick={handlePrint} className="bg-slate-800 text-white hover:bg-slate-700">
            Export as PDF
          </Button>
        </div>

        <Card className="overflow-visible shadow-md">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-800">Muniba Hameed</h1>
              <p className="text-sm text-slate-600 mt-1">Sales Associate (Aspiring) · Retail</p>
              <div className="mt-3 text-xs text-slate-600 space-x-4">
                <span>📞 +92 317 4191779</span>
                <span>✉️ manamhameed169@gmail.com</span>
                <span>📍 Mandi Bahauddin</span>
              </div>
            </div>

            {/* Career Objective */}
            <section className="mb-6">
              <h2 className="text-base font-semibold text-slate-700 border-b pb-1">Career Objective</h2>
              <p className="mt-2 text-sm text-slate-600">
                Motivated and hardworking individual seeking a position as a <strong>Sales Associate</strong> in the retail industry. Bringing strong communication
                skills, customer handling abilities, and office management experience to contribute to sales growth and excellent customer service.
              </p>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-base font-semibold text-slate-700 border-b pb-1">Education</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
                <div>
                  <p className="font-medium">B.Com (Continue)</p>
                  <p>AIOU</p>
                  <p className="text-xs mt-1 text-slate-500">—</p>
                </div>

                <div>
                  <p className="font-medium">Intermediate (ICS)</p>
                  <p>BISE Gujranwala</p>
                  <p className="text-xs mt-1 text-slate-500">65% · 2020</p>
                </div>

                <div>
                  <p className="font-medium">Matriculation (Science)</p>
                  <p>BISE Gujranwala</p>
                  <p className="text-xs mt-1 text-slate-500">67% · 2018</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
              <h2 className="text-base font-semibold text-slate-700 border-b pb-1">Work Experience</h2>
              <div className="mt-3 text-sm text-slate-600">
                <p className="font-medium">The Arqam Global Revolutionary High School — Teacher & Office Management</p>
                <p className="text-xs text-slate-500 mt-1">3+ years · Mandi Bahauddin</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Developed strong communication and presentation skills.</li>
                  <li>Managed office tasks and daily operations.</li>
                  <li>Coordinated with students and parents, improving interpersonal skills.</li>
                  <li>Built teamwork, organization, and problem-solving abilities.</li>
                </ul>
              </div>
            </section>

            {/* Key Skills */}
            <section className="mb-6">
              <h2 className="text-base font-semibold text-slate-700 border-b pb-1">Key Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Customer Service","Communication","Time Management","Office Management","Team Collaboration","MS Office & Email"].map((skill) => (
                  <span key={skill} className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Personal Information */}
            <section className="mb-6">
              <h2 className="text-base font-semibold text-slate-700 border-b pb-1">Personal Information</h2>
              <div className="mt-3 text-sm text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <p className="font-medium">Father’s Name</p>
                  <p>Hameed</p>
                </div>
                <div>
                  <p className="font-medium">Nationality</p>
                  <p>Pakistani</p>
                </div>
                <div>
                  <p className="font-medium">Religion</p>
                  <p>Islam</p>
                </div>
                <div>
                  <p className="font-medium">Date of Birth</p>
                  <p>—</p>
                </div>
                <div>
                  <p className="font-medium">CNIC</p>
                  <p>34402-1942235-2</p>
                </div>
                <div>
                  <p className="font-medium">Languages</p>
                  <p>Urdu, Punjabi, English (basic)</p>
                </div>
              </div>
            </section>

            {/* References */}
            <div className="text-xs text-slate-500 border-t pt-4">References available upon request.</div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
