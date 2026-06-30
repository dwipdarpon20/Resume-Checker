import { useRef, useState, useEffect } from "react";
import { UploadCloud, FileText, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { useInterview } from "../hooks/useInterview";
import { useNavigate } from "react-router";


const ReportBuilder = () => {

  const [fileName, setFileName] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const { loading, report, reports, generateInterviewReport, getInterviewReports } = useInterview();

  const resumeInputRef = useRef();
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0];
    if (!resumeFile) {
      alert("Please upload a resume");
      return;
    }
    if (!jobDescription.trim()) {
      alert("Please enter a job description");
      return;
    }
    if (!selfDescription.trim()) {
      alert("Please tell us about yourself");
      return;
    }
    const newReport = await generateInterviewReport({
      resumeFile,
      jobDescription,
      selfDescription,
    });

    setJobDescription("");
    setSelfDescription("");
    setFileName("");
    resumeInputRef.current.value = "";
    navigate(`/interview/${newReport._id}`);
    
  };

  useEffect(() => {
    getInterviewReports();
  }, [])


  return (
    <section id="report" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Generate your report in seconds</h2>
        <p className="mt-3 text-muted-foreground">
          Upload your resume, paste a job description, tell us about yourself, and let AI do the rest.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <label className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-secondary/40 px-6 py-10 text-center transition-colors hover:border-primary hover:bg-secondary">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-soft transition-transform group-hover:-translate-y-1">
              <UploadCloud className="h-7 w-7" />
            </span>
            <span className="text-sm font-semibold">
              {fileName || "Upload Resume (PDF)"}
            </span>
            <span className="text-xs text-muted-foreground">Drag & drop or click to browse</span>
            <input
              ref={resumeInputRef}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setFileName(file.name);
                }
              }}
              type="file"
              accept="application/pdf"
              className="hidden"
            />
          </label>
          <div className="mt-6 grid gap-5">
            <div>
              <label className="mb-1.5 block text-sm font-semibold">Job Description</label>
              <textarea
                value={jobDescription}
                onChange={(e) => (setJobDescription(e.target.value))}
                rows={4}
                placeholder="Paste the job description you're targeting..."
                className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold">About Yourself</label>
              <textarea
                value={selfDescription}
                onChange={(e) => setSelfDescription(e.target.value)}
                rows={3}
                placeholder="Tell us about your goals, strengths and target role..."
                className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              onClick={handleGenerateReport}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft disabled:opacity-50"
            >
              {loading ? "Generating..." : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Generate Report
                </>
              )}
            </button>
          </div>
        </div>
        <aside className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-bold">Recent Reports</h3>
          </div>
          {reports.length === 0 ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <FileText className="h-7 w-7 text-muted-foreground" />
              </div>
              <h4 className="mt-4 text-lg font-semibold">
                No Reports Yet
              </h4>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Generate your first AI interview report to view your report history here.
              </p>
            </div>) : (
            <div className="mt-4 max-h-[520px] overflow-y-auto scrollbar-none pr-2">
              <ul className="flex flex-col gap-3 ">
                {reports.map((r) => (
                  <li
                    key={r._id}
                    onClick={() => navigate(`/interview/${r._id}`)}
                    className="group cursor-pointer rounded-2xl border border-border bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">
                            {r.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {new Date(r.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${r.matchScore >= 90
                            ? "bg-green-100 text-green-700"
                            : r.matchScore >= 70
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {r.matchScore}%
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}

export default ReportBuilder;