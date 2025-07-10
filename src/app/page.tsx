import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 lg:py-8 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 lg:mb-8 overflow-x-auto">
          <div className="flex items-center whitespace-nowrap">
            <span>Accueil</span>
            <span className="mx-1 sm:mx-2">›</span>
            <span>Cours</span>
            <span className="mx-1 sm:mx-2">›</span>
            <span className="text-blue-600 font-medium">Les Décisions de Financement</span>
          </div>
        </nav>

        {/* Course Header */}
        <CourseHeader />

        {/* Course Plan */}
        <CoursePlan />
      </div>
    </main>
  );
}
