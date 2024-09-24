const getPageNumbers = (currentPage: number, totalPages: number, maxVisiblePages: number): (number | string)[] => {
  const pages = [];
  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    const visiblePagesBefore = Math.floor((maxVisiblePages - 2) / 2);
    const visiblePagesAfter = Math.floor((maxVisiblePages - 2) / 2);

    let startPage = Math.max(2, currentPage - visiblePagesBefore);
    let endPage = Math.min(totalPages - 1, currentPage + visiblePagesAfter);

    if (currentPage - visiblePagesBefore <= 1) {
      endPage = Math.min(totalPages - 1, endPage + (visiblePagesBefore - (currentPage - 2)));
    }

    if (currentPage + visiblePagesAfter >= totalPages) {
      startPage = Math.max(2, startPage - ((currentPage + visiblePagesAfter) - totalPages + 1));
    }

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    pages.push(totalPages);
  }

  return pages;
};

  export default getPageNumbers;