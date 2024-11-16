"use client";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterOptions from "@/app/components/core/filterOptions";

import Image from "next/image";
import { updateFilters } from "@/lib/redux/slices/search";
import { getFilters } from "@/lib/redux/slices/selectors";

const Filter = () => {
  const accordionRef = useRef();
  const imgRef = useRef();
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();
  const dispatchUpdateFilters = useCallback(
    (payload) => {
      dispatch(updateFilters(payload));
    },
    [dispatch]
  );

  const toggleAccordion = useCallback((e, forceHide = false) => {
    const hide = forceHide || accordionRef.current.style.maxHeight !== "0px";
    accordionRef.current.style.maxHeight = !hide ? "325px" : "0px";
    imgRef.current.src = `/rickandmortycharacters/assets/images/svgs/${
      !hide ? "plus" : "minus"
    }-circle-solid.svg`;
    imgRef.current.alt = !hide ? "+" : "-";
  }, []);

  useEffect(() => {
    if (window.screen.width > 568) {
      toggleAccordion(undefined, true);
    }
  }, [toggleAccordion]);

  return (
    <div className="row g-0 gap-3" data-testid="filters">
      <div className="row g-0 align-items-center justify-content-between gap-3">
        <h2 className="col-auto m-0">Filters</h2>
        <button
          className="col-auto d-md-none border bg-white text-dark p-0 rounded-circle object-fit-cover"
          onClick={toggleAccordion}
          data-bs-toggle="collapse"
          data-bs-target="#filter-container"
        >
          <Image
            ref={imgRef}
            aria-label="toggle filter"
            src={`/rickandmortycharacters/assets/images/svgs/minus-circle-solid.svg`}
            alt={"-"}
            width={32}
            height={32}
          />
        </button>
      </div>
      <div
        ref={accordionRef}
        className="row g-0 gap-3 collapse show"
        id="filter-container"
      >
        {filters.map((option) => (
          <FilterOptions
            key={option.id}
            title={option.label}
            items={option.items}
            name={option.id}
            onChange={dispatchUpdateFilters}
          />
        ))}
      </div>
      <style jsx>{`
        .collapse {
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }
        .collapse.show {
          max-height: 325px;
          transition: max-height 0.3s ease-in-out;
          @media (min-width: 768px) {
            max-height: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Filter;
