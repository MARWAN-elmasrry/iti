import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ active, setActive, pagination }) {

    console.log(pagination);
    const next = () => {
        if (active === pagination?.pageCount) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-8">
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{active}</strong> of{" "}
                <strong className="text-gray-900">{pagination?.pageCount}</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === 10}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}