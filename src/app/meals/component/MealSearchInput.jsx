"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlSearchParams = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlSearchParams}`;
        router.push(url);
    }, [search]);

    return (
        <div className="mt-8">
            <input type="search" name="" id="" value={search} onChange={e => setSearch(e.target.value)} className="w-full px-5 py-1.5 border border-gray-300 rounded focus:ring-3 ring-gray-200 outline-none" />
        </div>
    );
};

export default MealSearchInput;