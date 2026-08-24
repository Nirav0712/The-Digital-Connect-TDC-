import React from 'react';
export const SubServiceOverview = ({ title, content }) => (
    <section className="py-24 bg-white px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-[#171717]">{title}</h2>
            <p className="text-lg text-[#171717]/70 leading-relaxed">{content}</p>
        </div>
    </section>
);