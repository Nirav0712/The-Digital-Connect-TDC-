import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <SectionHeading title="In-Depth Case Studies" subtitle="Our Impact" />
          <Button variant="outline" to="/case-studies" className="mb-12">Explore All Cases</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-background rounded-2xl border border-border overflow-hidden flex flex-col md:flex-row group">
              <div className="w-full md:w-2/5 min-h-[200px] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
              </div>
              <div className="p-8 w-full md:w-3/5 flex flex-col justify-center">
                <span className="text-sm font-medium text-muted-foreground mb-2">Fintech • 400% Growth</span>
                <h3 className="text-2xl font-bold mb-4 line-clamp-2">Scaling a Neobank platform to 1M users</h3>
                <Link to="/case-studies/neobank" className="text-primary font-medium hover:underline inline-flex items-center">
                  Read Case Study <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CaseStudies;
