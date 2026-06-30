import { LoaderCircle } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
        <div className="flex items-center justify-center">
        <LoaderCircle className="animate-spin text-blue-500 size-8" />
    </div>
    </div>
  );
};
