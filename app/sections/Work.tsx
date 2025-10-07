import ProjectGrid from "../components/work/ProjectGrid";
import React from "react";

const Work = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
            id="work"
        >
            <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Featured Work (created along with other co-authors):
            </h2>
            <h3>Projects:</h3>
            <ProjectGrid />
            <h2><a href="https://scholar.google.com/citations?hl=en&user=1vZmkFIAAAAJ&view_op=list_works">Top cited papers</a></h2>
        </section>
    );
};

export default Work;
