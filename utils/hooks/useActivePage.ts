import { useRouter } from 'next/router';

const useActivePage = () => {
    const router = useRouter();
    const activePage = router.pathname;
    const queryParams = router.query;

    return { activePage, queryParams };
};

export default useActivePage;
