import {
    ArrowLeft,
    Download,
    Brain,
    Target,
    Briefcase,
    Calendar,
    ClipboardList,
    Award,
} from "lucide-react";
import { ProgressRing } from "../../components/report/ProgressRing";
import { QuestionCard } from "../../components/report/QuestionCard";
import { StatCard } from "../../components/report/StatCard";
import { DayCard } from "../../components/report/DayCard";
import { Accordion } from "../../components/report/Accordion";
import { useInterview } from "../../hooks/useInterview";
import { useEffect } from "react";
import { useParams } from "react-router";
import {LoadingSpinner} from "../../components/Loader"

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export function InterviewReport() {

    const { loading, report, getInterviewReportById } = useInterview();

    const { interviewId } = useParams();

    useEffect(() => {
        if (interviewId) {
            getInterviewReportById(interviewId);
        }
    }, [interviewId]);

    if (loading) {
        return <LoadingSpinner/>;

    }
    if (!report) {
        return <div> Report Not Found</div>;
    }

    const reportData = report;
    const totalSkillGaps = reportData.skillGaps.length;
    const highSeverity = reportData.skillGaps.filter((s) => s.severity === "high").length;

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

                {/* Match Score Card */}

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center text-center">
                    <ProgressRing progress={reportData.matchScore} />
                    <div className="mt-6 space-y-1">
                        <h2 className="text-xl font-semibold text-gray-900">{reportData.title}</h2>
                        <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Generated on {formatDate(reportData.createdAt)}
                        </p>
                    </div>
                </div>

                {/* Report Overview */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Report Overview</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        <StatCard
                            label="Job Title"
                            value={`${reportData.title}`}
                            icon={<Briefcase className="w-5 h-5 text-gray-400" />}
                        />
                        <StatCard
                            label="Match Score"
                            value={`${reportData.matchScore}%`}
                            icon={<Target className="w-5 h-5 text-gray-400" />}
                        />
                        <StatCard
                            label="Technical Questions"
                            value={reportData.technicalQuestions.length}
                            icon={<Brain className="w-5 h-5 text-gray-400" />}
                        />
                        <StatCard
                            label="Behavioral Questions"
                            value={reportData.behavioralQuestions.length}
                            icon={<ClipboardList className="w-5 h-5 text-gray-400" />}
                        />
                        <StatCard
                            label="Skill Gaps"
                            value={totalSkillGaps}
                            icon={<Award className="w-5 h-5 text-gray-400" />}
                        />
                    </div>
                </div>

                {/* Skill Gap Analysis */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Skill Gap Analysis</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {reportData.skillGaps.map((skill, index) => {
                            const severityColors = {
                                low: "bg-emerald-100 text-emerald-700 border-emerald-200",
                                medium: "bg-amber-100 text-amber-700 border-amber-200",
                                high: "bg-red-100 text-red-700 border-red-200",
                            };
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex items-center justify-between"
                                >
                                    <span className="font-medium text-gray-900">{skill.skill}</span>
                                    <span
                                        className={`px-2.5 py-1 text-xs font-medium rounded-full border ${severityColors[skill.severity]
                                            }`}
                                    >
                                        {skill.severity}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Technical Interview Questions */}
                <Accordion
                    title="Technical Interview Questions"
                    count={reportData.technicalQuestions.length}
                    icon={<Brain className="w-5 h-5" />}
                >
                    <div className="grid gap-4">
                        {reportData.technicalQuestions.map((q, index) => (
                            <QuestionCard
                                key={index}
                                question={q.question}
                                intention={q.intention}
                                answer={q.answer}
                            />
                        ))}
                    </div>
                </Accordion>

                {/* Behavioral Interview Questions */}
                <Accordion
                    title="Behavioral Interview Questions"
                    count={reportData.behavioralQuestions.length}
                    icon={<ClipboardList className="w-5 h-5" />}
                >
                    <div className="grid gap-4">
                        {reportData.behavioralQuestions.map((q, index) => (
                            <QuestionCard
                                key={index}
                                question={q.question}
                                intention={q.intention}
                                answer={q.answer}
                                intentionLabel="Purpose"
                            />
                        ))}
                    </div>
                </Accordion>

                {/* 7-Day Preparation Plan */}
                <Accordion
                    title="7-Day Preparation Plan"
                    count={7}
                    icon={<Calendar className="w-5 h-5" />}
                    defaultOpen={false}
                >
                    <div className="mt-2">
                        {reportData.preparationPlan.map((day, index) => (
                            <DayCard
                                key={day.day}
                                day={day.day}
                                focus={day.focus}
                                tasks={day.tasks}
                                isLast={index === reportData.preparationPlan.length - 1}
                            />
                        ))}
                    </div>
                </Accordion>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-8">
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg">
                        <Download className="w-5 h-5" />
                        Download Full Report
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                        <Download className="w-5 h-5" />
                        Download Questions & Answers
                    </button>
                </div>
            </main>
        </div>
    );
}
