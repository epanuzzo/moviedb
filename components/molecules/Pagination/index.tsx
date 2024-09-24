import React from 'react';
import useIsMobile from '@/utils/hooks/useIsMobile';
import getPageNumbers from '@/utils/helpers/getPageNumbers';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNext, onPrevious, onPageChange }) => {
    const isMobile = useIsMobile();
    const maxVisiblePages = isMobile ? 2 : 6;
    const pageNumbers = getPageNumbers(currentPage, totalPages, maxVisiblePages);

    return (
        <div className="flex justify-center items-center space-x-4 mt-8">
            <button
                onClick={onPrevious}
                disabled={currentPage === 1}
                className={`px-2 md:px-4 py-2 rounded-md bg-gray-700 text-white font-semibold hover:bg-gray-600 transition ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
            </button>

            <div className="flex space-x-1 md:space-x-2">
                {pageNumbers.map((page, index) =>
                    typeof page === 'string' ? (
                        <span key={index} className="px-2 py-2 text-gray-500">
                            {page}
                        </span>
                    ) : (
                        <button
                            key={index}
                            onClick={() => onPageChange(page)}
                            className={`px-2 md:px-4 py-2 rounded-md ${
                                page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                            >
                                {page}
                        </button>
                    )
                )}
            </div>

            <button
                onClick={onNext}
                disabled={currentPage === totalPages}
                className={`px-2 md:px-4 py-2 rounded-md bg-gray-700 text-white font-semibold hover:bg-gray-600 transition ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
