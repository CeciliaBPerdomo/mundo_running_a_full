import React from "react";
import ComprasFinalizadasHeaders from "./ComprasFinalizadasHeaders";

const SkeletonCell = ({ align = "left" }) => {
    const alignClass =
        align === "center"
            ? "mx-auto"
            : align === "right"
                ? "ml-auto"
                : "";

    return (
        <div
            className={`h-4 w-3/4 bg-gray-200 rounded animate-pulse ${alignClass}`}
        />
    );
};

const ComprasFinalizadasTableSkeleton = ({ rows = 5 }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow border mt-3">
            <table className="min-w-full text-sm">
                <ComprasFinalizadasHeaders />

                <tbody>
                    {Array.from({ length: rows }).map((_, i) => (
                        <tr key={i} className="border-t">
                            <td className="px-4 py-3">
                                <SkeletonCell />
                            </td>

                            <td className="px-4 py-3">
                                <SkeletonCell />
                            </td>

                            <td className="px-4 py-3 text-center">
                                <SkeletonCell align="center" />
                            </td>

                            <td className="px-4 py-3 text-right">
                                <SkeletonCell align="right" />
                            </td>

                            <td className="px-4 py-3 text-center">
                                <SkeletonCell align="center" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComprasFinalizadasTableSkeleton;
