import React from "react";
import ComprasRealizadasHeaders from "./ComprasRealizadasHeaders";

const ROWS = 3;

const SkeletonCell = ({ align = "left" }) => {
  const alignClass =
    align === "center"
      ? "mx-auto"
      : align === "right"
      ? "ml-auto"
      : "";

  return (
    <div
      className={`h-4 bg-gray-200 rounded ${alignClass}`}
      style={{ width: "70%" }}
    />
  );
};

const ComprasRealizadasSkeleton = () => {
  return (
    <table className="min-w-full text-sm animate-pulse">
      <ComprasRealizadasHeaders />

      <tbody>
        {Array.from({ length: ROWS }).map((_, i) => (
          <tr key={i} className="border-t">
            <td className="px-4 py-4">
              <SkeletonCell />
            </td>

            <td className="px-4 py-4 text-center">
              <SkeletonCell align="center" />
            </td>

            <td className="px-4 py-4">
              <SkeletonCell />
            </td>

            <td className="px-4 py-4 text-right">
              <SkeletonCell align="right" />
            </td>

            <td className="px-4 py-4 text-center">
              <SkeletonCell align="center" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComprasRealizadasSkeleton;
